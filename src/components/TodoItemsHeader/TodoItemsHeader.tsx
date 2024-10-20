"use client";

import { cn } from "@/lib/utils";
import { AddNewItemButton } from "@/src/components/AddNewItemButton/AddNewItemButton";
import { Button } from "@/src/components/Button/Button";
import { FilterItem } from "@/src/components/FilterItem/FilterItem";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useAuth } from "@/src/hooks/useAuth";
import { useDeleteList } from "@/src/modules/todo-lists/use-querys/useDeleteList";
import {
  useTodoListByListId,
  useTodoListByListIdKey,
} from "@/src/modules/todo-lists/use-querys/useTodoListByListId";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeftIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export const TodoItemsHeader = () => {
  const { user } = useAuth();
  const { listId } = useParams();
  const queryClient = useQueryClient();

  const router = useRouter();

  const userId = user?.userId ?? 0;

  const { data: todoList } = useTodoListByListId({
    listId: Number(listId),
    userId: userId,
    options: {
      enabled: !!userId && !!listId,
    },
  });

  const mutation = useDeleteList({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${useTodoListByListIdKey}${listId}`],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const buttonDisabled = mutation.isPending || !todoList;

  return (
    <header className="z-10 flex flex-col gap-2 border-b-2 border-[#54353ECC] bg-gradient-to-r from-[#352432] to-[#241722] pb-4 pt-4 md:sticky md:top-0 md:items-center">
      <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
        <h1 className="font-poppins flex max-w-xs items-center gap-6 text-lg font-bold text-[#FEEDE1]">
          <Link href="#" onClick={() => history.back()} className="w-max">
            <ArrowLeftIcon />
          </Link>
          {todoList && (
            <span className="max-w-full truncate">
              {todoList.listEmoji} <b>{todoList.listName}</b>
            </span>
          )}
        </h1>
        <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-normal">
          <Dialog>
            <DialogTrigger>
              <Button
                disabled={!todoList}
                className={cn(
                  "flex h-6 items-center gap-4",
                  !buttonDisabled
                    ? "text-[#F25551] hover:text-[#a73a38]"
                    : "text-gray-400"
                )}
              >
                <Trash2 />
                Delete List
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to delete the todolist?
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. It will permanently delete your
                  todo list {`"`}
                  {todoList?.listEmoji}
                  <b>{todoList?.listName}</b>
                  {`"`}. After deleting you will be redirected to the list page
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <button
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-md transition duration-150 ease-in-out",
                      "hover:bg-primary-600 focus:ring-primary-300 bg-red-400 px-4 py-2.5 text-sm text-black focus:ring-4 focus:ring-opacity-50"
                    )}
                    onClick={() => {
                      if (userId) {
                        mutation.mutate({
                          listIds: [Number(listId)],
                          userId: userId,
                        });
                      }
                      router.push("/todo-lists");
                    }}
                  >
                    Delete
                  </button>
                </DialogClose>
                <DialogClose asChild>
                  <button
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-md transition duration-150 ease-in-out",
                      "border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-300 border px-4 py-2.5 text-sm focus:ring-4 focus:ring-opacity-50"
                    )}
                  >
                    Cancel
                  </button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AddNewItemButton hasTodoList={!!todoList} listId={Number(listId)} />
        </div>
      </div>

      {todoList && <FilterItem />}
    </header>
  );
};

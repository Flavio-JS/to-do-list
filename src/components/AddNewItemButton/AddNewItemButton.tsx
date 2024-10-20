"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/src/components/Button/Button";
import { useAuth } from "@/src/hooks/useAuth";
import { useCreateTodoItem } from "@/src/modules/todo-item/use-querys/useCreateTodoItem";
import { useTodoItemsKey } from "@/src/modules/todo-item/use-querys/useGetTodoItems";
import { useQueryClient } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react";

export type AddNewItemButton = {
  listId: number;
  hasTodoList: boolean;
};

export const AddNewItemButton = ({ listId, hasTodoList }: AddNewItemButton) => {
  const queryClient = useQueryClient();
  const userData = useAuth();

  const mutation = useCreateTodoItem({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${useTodoItemsKey}${listId}`],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClick = () => {
    const userId = userData.user?.userId;
    if (userId) {
      mutation.mutate({
        userId,
        listId,
      });
    } else {
      console.error("User not found");
    }
  };

  const buttonDisabled = mutation.isPending || !hasTodoList;

  return (
    <Button
      className={cn(
        "flex h-6 gap-4",
        !buttonDisabled
          ? "text-[#F25551] hover:text-[#a73a38]"
          : "text-gray-400"
      )}
      onClick={handleClick}
      disabled={buttonDisabled}
    >
      <CirclePlus />
      Add new item
    </Button>
  );
};

"use client";

import { AddNewItemButton } from "@/src/components/AddNewItemButton/AddNewItemButton";
import { Button } from "@/src/components/Button/Button";
import { ItemList } from "@/src/components/ItemList/ItemsList";
import { useAuth } from "@/src/hooks/useAuth";
import ArrowLeftIcon from "@/src/Icons/ArrowLeftIcon";
import EmptyToDoListSVG from "@/src/Icons/EmptyToDoListSVG";
import { useTodoItems } from "@/src/modules/todo-item/use-querys/useGetTodoItems";
import { Trash2 } from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Todo() {
  const { listId } = useParams();
  const { user } = useAuth();

  const { data } = useTodoItems({
    listId: Number(listId),
    userId: user?.userId as number,
    options: {
      enabled: !!user,
    },
  });

  return (
    <main className="flex h-full flex-1 flex-col">
      <header className="flex items-center justify-between border-b-2 border-[#54353ECC] pb-4">
        <h1 className="font-poppins flex max-w-xs items-center gap-6 text-lg font-bold text-[#FEEDE1]">
          <Link href={"/"} className="w-max">
            <ArrowLeftIcon />
          </Link>
          <span className="max-w-full truncate">
            😎 <b>{listId}</b>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste, voluptatem.
          </span>
        </h1>
        <div className="flex gap-6">
          <Button className="flex h-6 items-center gap-4 text-[#F25551] hover:text-[#a73a38]">
            <Trash2 />
            Delete List
          </Button>
          <AddNewItemButton listId={Number(listId)} />
        </div>
      </header>
      {data?.length ? (
        <section className="relative flex w-full flex-1 flex-col items-center justify-center">
          {data.map((item) => (
            <ItemList key={item.itemId} />
          ))}
        </section>
      ) : (
        <section className="relative flex w-full flex-1 items-center justify-center">
          <EmptyToDoListSVG />
        </section>
      )}
    </main>
  );
}

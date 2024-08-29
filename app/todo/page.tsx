"use client";

import { Button } from "@/src/components/Button/Button";
import { ItemList } from "@/src/components/ItemList/ItemsList";
import ArrowLeftIcon from "@/src/Icons/ArrowLeftIcon";
import ButtonMore from "@/src/Icons/ButtonMore";
import Trash from "@/src/Icons/Trash";
import Link from "next/link";

export default function Todo() {
  return (
    <main className="flex h-full flex-1 flex-col">
      <header className="mt-16 flex items-center justify-between border-b-2 border-[#54353ECC] pb-4">
        <h1 className="font-poppins flex max-w-xs items-center gap-6 text-lg font-bold text-[#FEEDE1]">
          <Link href={"/"} className="w-max">
            <ArrowLeftIcon />
          </Link>
          <span className="max-w-full truncate">
            😎 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            voluptatem.
          </span>
        </h1>
        <div className="flex gap-6">
          <Button className="flex h-6 items-center gap-4 text-[#F25551]">
            <Trash />
            Delete List
          </Button>
          <Button className="flex h-6 items-center gap-4 text-[#F25551]">
            <ButtonMore />
            Add to-do
          </Button>
        </div>
      </header>
      <section className="relative flex w-full flex-1 items-center justify-center">
        <ItemList />
      </section>
    </main>
  );
}

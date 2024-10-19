import { cn } from "@/lib/utils";
import { AddNewListButton } from "@/src/components/AddNewListButton/AddNewListButton";
import { FilterList } from "@/src/components/FilterList/FilterList";
import { TodoListsSection } from "@/src/components/TodoListSection/TodoListsSection";
import { Suspense } from "react";

export default function TodoListsPage() {
  return (
    <main className="relative flex h-full flex-1 flex-col">
      <header
        className={cn(
          "z-10 flex w-full flex-col gap-2 border-b-2 md:sticky md:top-0",
          "border-[#54353ECC] bg-gradient-to-r from-[#352432]",
          "to-[#241722] pb-4 pt-4"
        )}
      >
        <div className="flex w-full flex-col justify-between md:flex-row">
          <h1 className="font-poppins text-2xl font-bold text-[#FEEDE1]">
            TO DO | YOUR LISTS
          </h1>
          <AddNewListButton />
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <FilterList />
        </Suspense>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <TodoListsSection />
      </Suspense>
    </main>
  );
}

import { Button } from "@/src/components/Button/Button";
import { TodoListsSection } from "@/src/components/TodoListSection/TodoListsSection";
import PlusCircle from "@/src/Icons/PlusCircle";

export default function TodoListsPage() {
  return (
    <main className="flex h-full flex-1 flex-col">
      <header className="flex justify-between border-b-2 border-[#54353ECC] pb-4">
        <h1 className="font-poppins text-2xl font-bold text-[#FEEDE1]">
          TO DO | YOUR LISTS
        </h1>
        <Button className="flex h-6 gap-4 text-[#F25551]">
          <PlusCircle />
          Add new list
        </Button>
      </header>
      <TodoListsSection />
    </main>
  );
}

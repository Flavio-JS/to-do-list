import { TodoItemsHeader } from "@/src/components/TodoItemsHeader/TodoItemsHeader";
import { TodoItemsSection } from "@/src/components/TodoItemsSection/TodoItemsSection";

export default function Todo() {
  return (
    <main className="relative flex h-full flex-1 flex-col">
      <TodoItemsHeader />
      <TodoItemsSection />
    </main>
  );
}

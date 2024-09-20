import { ButtonRainbow } from "@/src/components/ItemList/ButtonRainbow/ButtonRainbow";
import { TodoItem } from "@/src/modules/todo-item/use-querys/useGetTodoItems";

export type ItemListProps = TodoItem;

export const ItemList = ({
  itemName,
  itemId,
  finished,
  listId,
  priority,
  createdAt,
  editedAt,
}: ItemListProps) => {
  return (
    <div className="mb-2 flex w-full items-center gap-3 rounded-lg bg-[#352432] p-2 px-8 py-4 shadow-lg">
      <ButtonRainbow checked={finished} />
      <span className="text-base text-[#e5e5e5]">{itemName}</span>
    </div>
  );
};

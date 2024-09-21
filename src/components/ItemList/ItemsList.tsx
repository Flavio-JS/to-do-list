"use client";

import { DeleteItemButton } from "@/src/components/DeleteItemButton/DeleteItemButton";
import { ButtonRainbow } from "@/src/components/ItemList/ButtonRainbow/ButtonRainbow";
import { TodoItem } from "@/src/modules/todo-item/use-querys/useGetTodoItems";
import { useUpdateTodoItem } from "@/src/modules/todo-item/use-querys/useUpdateTodoItem";
import { Check, Pencil } from "lucide-react";
import { useState } from "react";

export type ItemListProps = TodoItem & {
  userId: number;
};

export const ItemsList = ({
  itemName,
  itemId,
  finished: initialFinished,
  listId,
  priority,
  userId,
  createdAt,
  editedAt,
}: ItemListProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const createdDate = `${new Date(createdAt).toLocaleDateString("en-us", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })}`;

  const [itemNameInput, setItemNameInput] = useState(itemName);

  const [selectedPriority, setSelectedPriority] = useState<
    "Alta" | "Media" | "Baixa"
  >(priority as "Alta" | "Media" | "Baixa");

  const [finished, setFinished] = useState(initialFinished);

  const updateMutation = useUpdateTodoItem({
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSave = () => {
    updateMutation.mutate({
      itemId,
      userId,
      finished: finished,
      itemName: itemNameInput,
      priority: selectedPriority,
    });
    setIsEditing(!isEditing);
  };

  if (!isEditing)
    return (
      <div
        className={`mb-2 flex w-full items-center justify-between border-l-4 ${selectedPriority === "Alta" ? "border-red-600" : selectedPriority === "Media" ? "border-yellow-500" : "border-green-500"} rounded-lg bg-[#352432] p-2 px-8 py-4 shadow-lg`}
      >
        <div className="flex items-center justify-center gap-3">
          <ButtonRainbow checked={finished} />
          <span className="text-base text-[#e5e5e5]">{itemNameInput}</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-[#FFFBFF]">
          <span>Created: {createdDate}</span>
          <span
            className="hover:cursor-pointer hover:text-[#FEEDE1]"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Pencil />
          </span>
        </div>
      </div>
    );

  return (
    <div
      className={`mb-2 flex w-full items-center justify-between border-l-4 ${selectedPriority === "Alta" ? "border-red-600" : selectedPriority === "Media" ? "border-yellow-500" : "border-green-500"} rounded-lg bg-[#352432] p-2 px-8 py-4 shadow-lg`}
    >
      <div className="flex items-center justify-center gap-3">
        <ButtonRainbow checked={finished} />
        <span className="text-base text-[#e5e5e5]">{itemNameInput}</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <DeleteItemButton
          listId={listId}
          itemName={itemName}
          itemId={itemId}
          userId={userId}
        />

        <span
          className="text-[#FFFBFF] hover:text-[#FEEDE1]"
          onClick={handleSave}
        >
          <Check />
        </span>
      </div>
    </div>
  );
};

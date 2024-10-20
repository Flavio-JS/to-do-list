"use client";

import { ItemsList } from "@/src/components/ItemList/ItemsList";
import { ListNotFound } from "@/src/components/ListNotFound/ListNotFound";
import { useAuth } from "@/src/hooks/useAuth";
import EmptyToDoListSVG from "@/src/Icons/EmptyToDoListSVG";
import { useTodoItems } from "@/src/modules/todo-item/use-querys/useGetTodoItems";
import { useParams, useSearchParams } from "next/navigation";

export const TodoItemsSection = () => {
  const { user } = useAuth();
  const userId = user?.userId ?? 0;

  const { listId } = useParams();

  const searchParams = useSearchParams();

  const itemNameParam = searchParams.get("itemName");
  const priorityParam = searchParams.get("priority");
  const finishedParam = searchParams.get("finished");

  const { data: todoItems, isLoading: isLoadingTodoItems } = useTodoItems({
    listId: Number(listId),
    userId: userId,
    options: {
      enabled: !!userId,
      select: (data) => {
        const listNameParamNormalized = itemNameParam ?? "";
        const priorityParamNormalized = priorityParam ?? "Todas";
        const finishedParamNormalized = finishedParam ?? "Todas";

        const filteredData = data.filter((item) => {
          const matchesListName =
            !listNameParamNormalized ||
            item.itemName
              .toLowerCase()
              .includes(listNameParamNormalized.toLowerCase());

          const matchesPriority =
            priorityParamNormalized === "Todas" ||
            item.priority === priorityParamNormalized;

          const matchesFinished =
            finishedParamNormalized === "Todas" ||
            (finishedParamNormalized === "F" && item.finished === true) ||
            (finishedParamNormalized === "NF" && item.finished === false);

          return matchesListName && matchesPriority && matchesFinished;
        });

        return filteredData.slice().reverse();
      },
    },
  });

  if (!todoItems)
    return <ListNotFound isLoadingTodoList={isLoadingTodoItems} />;

  return (
    <>
      {todoItems?.length ? (
        <section className="relative flex w-full flex-1 flex-col items-center justify-center">
          {todoItems.map((item) => (
            <ItemsList key={item.itemId} {...item} />
          ))}
        </section>
      ) : (
        <section className="relative flex w-full flex-1 items-center justify-center">
          <EmptyToDoListSVG />
        </section>
      )}
    </>
  );
};

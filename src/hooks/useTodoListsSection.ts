import { useAuth } from "@/src/hooks/useAuth";
import { useTodoList } from "@/src/modules/todo-lists/use-querys/useGetTodoList";
import { useSearchParams } from "next/navigation";

export function useTodoListsSection() {
  const { user } = useAuth();
  const searchParams = useSearchParams();

  const listNameParam = searchParams.get("listName");
  const priorityParam = searchParams.get("priority");
  const finishedParam = searchParams.get("finished");
  const { data: todoLists = [], isFetching } = useTodoList({
    userId: user?.userId ?? 0,
    options: {
      enabled: !!user,
      select: (data) => {
        const listNameParamNormalized = listNameParam ?? "";
        const priorityParamNormalized = priorityParam ?? "Todas";
        const finishedParamNormalized = finishedParam ?? "Todas";

        const filteredData = data.filter((list) => {
          const matchesListName =
            !listNameParamNormalized ||
            list.listName
              .toLowerCase()
              .includes(listNameParamNormalized.toLowerCase());

          const matchesPriority =
            priorityParamNormalized === "Todas" ||
            list.priority === priorityParamNormalized;

          const matchesFinished =
            finishedParamNormalized === "Todas" ||
            (finishedParamNormalized === "F" && list.finished === true) ||
            (finishedParamNormalized === "NF" && list.finished === false);

          return matchesListName && matchesPriority && matchesFinished;
        });

        return filteredData.slice().reverse();
      },
    },
  });

  return { todoLists, isFetching };
}

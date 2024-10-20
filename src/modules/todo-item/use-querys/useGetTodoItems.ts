import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { type QueryFnOptions } from "@/src/lib/react-query";
import { getCookie } from "@/src/utils/getCookies";
import { fetchTodoListByListId } from "@/src/modules/todo-lists/use-querys/useTodoListByListId";

export type TodoItem = {
  itemId: number;
  itemName: string;
  createdAt: Date;
  editedAt: Date;
  listId: number;
  userId: number;
  priority: string;
  finished: boolean;
};

export const todoItemPath = "/api/todo-item";

type FetchTodoItemsProps = {
  listId: number;
  userId: number;
};

export const fetchTodoItems = async ({
  listId,
  userId,
}: FetchTodoItemsProps): Promise<TodoItem[]> => {
  const token = getCookie("auth_token");

  if (!token) {
    throw new Error("No auth token found in cookies");
  }

  const response = await fetch(todoItemPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      listId,
      userId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todo items");
  }

  return response.json();
};

async function handleFetchTodoItems({ listId, userId }: FetchTodoItemsProps) {
  try {
    const list = await fetchTodoListByListId({ listId, userId });

    if (!list) {
      throw new Error("List not found");
    }

    const todoItems = await fetchTodoItems({ listId, userId });

    return todoItems;
  } catch (error) {
    console.error("Error fetching todo items", error);

    throw error;
  }
}

export type UseTodoItemsOptions<TData = TodoItem[]> = {
  listId: number;
  userId: number;
  options?: QueryFnOptions<TodoItem[], TData>;
};

export const useTodoItemsKey = "todoItems";

export const useTodoItems = <TData = TodoItem[]>({
  listId,
  userId,
  options = {},
}: UseTodoItemsOptions<TData>): UseQueryResult<TData, Error> => {
  const queryKey = `${useTodoItemsKey}${listId}`;

  const { enabled, ...restOptions } = options as UseQueryOptions<
    TodoItem[],
    Error,
    TData,
    QueryKey
  >;

  return useQuery<TodoItem[], Error, TData>({
    ...restOptions,
    queryKey: [queryKey],
    queryFn: () => handleFetchTodoItems({ listId, userId }),
    enabled,
  });
};

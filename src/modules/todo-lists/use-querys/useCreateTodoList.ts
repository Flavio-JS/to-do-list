import { ListType } from "@/src/modules/todo-lists/types/ListType";
import { getCookie } from "@/src/utils/getCookies";
import { MutationOptions, useMutation } from "@tanstack/react-query";

export const createTodoListPath = "/api/todo-list/create";

export type CreateTodoListProps = {
  userId: number;
  listName?: string;
  finished?: boolean;
  listEmoji?: string;
  priority?: "Alta" | "Media" | "Baixa";
};

export const createTodoList = async ({
  userId,
  finished = false,
  listEmoji = "😁",
  listName = "New Todo List",
  priority = "Baixa",
}: CreateTodoListProps): Promise<ListType> => {
  const token = getCookie("auth_token");

  const response = await fetch(createTodoListPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId,
      finished,
      listEmoji,
      listName,
      priority,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update list");
  }

  return response.json();
};

type UseCreateTodoListOptions = MutationOptions<
  ListType,
  Error,
  CreateTodoListProps
>;

export const useCreateTodoList = (options?: UseCreateTodoListOptions) => {
  return useMutation<ListType, Error, CreateTodoListProps>({
    ...options,
    mutationFn: (data: CreateTodoListProps) => createTodoList(data),
  });
};

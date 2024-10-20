import { type TodoItemType } from "@/src/modules/todo-item/types/TodoItemType";
import { getCookie } from "@/src/utils/getCookies";
import { type MutationOptions, useMutation } from "@tanstack/react-query";

export const updateTodoItemPath = "/api/todo-item/update";

export type UpdateTodoItemProps = {
  itemId: number;
  userId: number;
  itemName?: string;
  finished?: boolean;
  priority?: "Alta" | "Media" | "Baixa";
};

export const updateTodoItem = async ({
  itemId,
  userId,
  itemName,
  finished,
  priority,
}: UpdateTodoItemProps): Promise<TodoItemType> => {
  const token = getCookie("auth_token");

  const response = await fetch(updateTodoItemPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      itemId,
      userId,
      itemName,
      finished,
      priority,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo item");
  }

  return response.json();
};

type UseUpdateTodoItemOptions = MutationOptions<
  TodoItemType,
  Error,
  UpdateTodoItemProps
>;

export const useUpdateTodoItem = (options?: UseUpdateTodoItemOptions) => {
  return useMutation<TodoItemType, Error, UpdateTodoItemProps>({
    ...options,
    mutationFn: (data: UpdateTodoItemProps) => updateTodoItem(data),
  });
};

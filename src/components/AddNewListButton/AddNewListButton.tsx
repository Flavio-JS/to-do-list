"use client";

import { Button } from "@/src/components/Button/Button";
import { useAuth } from "@/src/hooks/useAuth";
import { useCreateTodoList } from "@/src/modules/todo-lists/use-querys/useCreateTodoList";
import { useTodoListKey } from "@/src/modules/todo-lists/use-querys/useGetTodoList";
import { useQueryClient } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react";

export const AddNewListButton = () => {
  const queryClient = useQueryClient();
  const userData = useAuth();

  const mutation = useCreateTodoList({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${useTodoListKey}${userData.user?.userId}`],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClick = () => {
    const userId = userData.user?.userId;
    if (userId) {
      mutation.mutate({ userId });
    } else {
      console.error("User not found");
    }
  };

  return (
    <Button
      className="flex h-6 gap-4 text-[#F25551] hover:text-[#a73a38]"
      onClick={handleClick}
    >
      <CirclePlus />
      Add new list
    </Button>
  );
};

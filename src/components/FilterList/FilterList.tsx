"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useAuth } from "@/src/hooks/useAuth";
import { useTodoListKey } from "@/src/modules/todo-lists/use-querys/useGetTodoList";
import { useQueryClient } from "@tanstack/react-query";
import { Filter, Search, SearchX } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function FilterList() {
  const router = useRouter();
  const userData = useAuth();
  const [priority, setPriority] = useState("Todas");
  const [finished, setFinished] = useState("Todas");

  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const listNameParam = searchParams.get("listName") ?? "";
  const priorityParam = searchParams.get("priority") ?? "Todas";
  const finishedParam = searchParams.get("finished") ?? "Todas";

  const showClearFilters =
    listNameParam !== "" ||
    priorityParam !== "Todas" ||
    finishedParam !== "Todas";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.set("listName", form.listName.value);
    currentParams.set("priority", priority);
    currentParams.set("finished", finished);

    queryClient.invalidateQueries({
      queryKey: [`${useTodoListKey}${userData.user?.userId}`],
    });

    router.push(`?${currentParams.toString()}`);
  };

  const handleClearFilters = () => {
    router.push("");
    setPriority("Todas");
    setFinished("Todas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-[#FEEDE1] md:flex-row md:items-end">
        <span className="hidden min-h-10 min-w-10 items-center justify-center text-5xl md:flex">
          <Filter />
        </span>

        <div className="flex w-full flex-col gap-1">
          <span className="text-xs">Name</span>
          <Input
            className="h-10"
            type="text"
            placeholder="List name"
            id="listName"
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="text-xs">Priority</span>
          <Select onValueChange={setPriority} defaultValue={priority}>
            <SelectTrigger className="min-w-20 rounded border bg-transparent px-2">
              <SelectValue placeholder="Selecione a prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="Todas">All</SelectItem>
                <SelectItem value="Baixa">Low</SelectItem>
                <SelectItem value="Media">Medium</SelectItem>
                <SelectItem value="Alta">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="text-xs">Finished</span>
          <Select onValueChange={setFinished} defaultValue={finished}>
            <SelectTrigger className="min-w-20 rounded border bg-transparent px-2">
              <SelectValue placeholder="Selecione o finalizado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Finished</SelectLabel>
                <SelectItem value="Todas">All</SelectItem>
                <SelectItem value="F">Finalized</SelectItem>
                <SelectItem value="NF">Not Finalized</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full flex-col gap-2 md:flex-row">
          <Button className="flex h-10 w-full gap-2 md:w-fit">
            <Search size={16} />
            Filter
          </Button>
          {showClearFilters && (
            <Button
              className="flex h-10 w-full gap-2 md:w-fit"
              onClick={handleClearFilters}
            >
              <SearchX size={16} />
              Clear
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

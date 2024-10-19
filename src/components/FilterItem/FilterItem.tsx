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
import { Filter, Search, SearchX } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function FilterItem() {
  const router = useRouter();
  const [name, setName] = useState<undefined | string>();
  const [priority, setPriority] = useState("Todas");
  const [finished, setFinished] = useState("Todas");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const currentParams = new URLSearchParams(window.location.search);

    currentParams.set("itemName", form.itemName.value);
    currentParams.set("priority", priority);
    currentParams.set("finished", finished);

    router.push(`?${currentParams.toString()}`);
  };

  const handleClearFilters = () => {
    router.push("");
    setPriority("Todas");
    setFinished("Todas");
    setName("");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-4 text-[#FEEDE1] md:flex-row md:items-end">
        <span className="hidden min-h-10 min-w-10 items-center justify-center text-5xl md:flex">
          <Filter />
        </span>

        <div className="flex w-full flex-col gap-1">
          <span className="text-xs">Name</span>
          <Input
            className="h-10"
            type="text"
            placeholder="Item name"
            id="itemName"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="text-xs">Priority</span>
          <Select onValueChange={setPriority} value={priority}>
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
          <Select onValueChange={setFinished} value={finished}>
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
          <Button
            className="flex h-10 w-full gap-2 md:w-fit"
            onClick={handleClearFilters}
          >
            <SearchX size={16} />
            Clear
          </Button>
        </div>
      </div>
    </form>
  );
}

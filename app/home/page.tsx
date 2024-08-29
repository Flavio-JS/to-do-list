import { Button } from "@/src/components/Button/Button";
import PlusCircle from "@/src/Icons/PlusCircle";
import Rectangle from "@/src/Icons/Rectangle";

export default function Home() {
  return (
    <main className="flex h-full flex-1 flex-col">
      <header className="mt-16 flex justify-between border-b-2 border-[#54353ECC] pb-4">
        <h1 className="font-poppins text-2xl font-bold text-[#FEEDE1]">
          TO DO | YOUR LISTS
        </h1>
        <Button className="flex h-6 gap-4 text-[#F25551]">
          <PlusCircle />
          Add new list
        </Button>
      </header>
      <section className="relative flex w-full flex-1 items-center justify-center">
        <h1 className="font-poppins absolute text-center text-6xl font-bold text-[#FEEDE1] md:text-8xl lg:text-9xl">
          TO-DO LIST
        </h1>
        <Rectangle />
      </section>
    </main>
  );
}

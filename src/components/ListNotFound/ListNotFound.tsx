import Link from "next/link";

export type ListNotFoundProps = {
  isLoadingTodoList: boolean;
};

export const ListNotFound = ({ isLoadingTodoList }: ListNotFoundProps) => {
  return (
    <section className="relative flex w-full flex-1 flex-col items-center justify-center">
      {isLoadingTodoList ? (
        <h2 className="text-2xl text-[#FEEDE1]">
          <b>Loading...</b>
        </h2>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 text-[#FEEDE1]">
          <h2 className="text-2xl">
            <b>List not found</b>
          </h2>
          <Link href="/todo-lists" className="w-max underline">
            Click here to back to lists page
          </Link>
        </div>
      )}
    </section>
  );
};

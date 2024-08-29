import Setinha from "@/src/Icons/Setinha";

type CardListProps = {
  title: string;
  emoji: string;
};
export default function CardList({ title, emoji }: CardListProps) {
  return (
    <div className="w-full bg-[#241722] p-4">
      <div className="mb-2 flex cursor-pointer items-center justify-between rounded-md border-l-4 border-[#F25551] bg-[#2D1B30] p-4 text-white shadow-lg transition-all duration-200 hover:border-[#50F283]">
        <div className="flex items-center">
          <span role="img" aria-label="list" className="mr-2">
            {emoji}
          </span>
          <span>{title}</span>
        </div>
        <span className="text-[#9150FC]">
          <Setinha />
        </span>
      </div>
    </div>
  );
}

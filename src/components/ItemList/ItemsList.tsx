import { ButtonRainbow } from "@/src/components/ItemList/ButtonRainbow/ButtonRainbow";

export const ItemList = () => {
  return (
    <div className="mb-2 flex w-full items-center gap-3 rounded-lg bg-[#352432] p-2 px-8 py-4 shadow-lg">
      <ButtonRainbow checked={false} />
      <span className="text-base text-[#e5e5e5]">Write Text</span>
    </div>
  );
};

import { cn } from "@/lib/utils";

export type ButtonVariant = "filled" | "outlined" | "text";

export type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  variant = "filled",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md transition duration-150 ease-in-out",
        variant === "text" &&
          "text-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-300 px-4 py-2.5 text-sm focus:ring-4 focus:ring-opacity-50",
        variant === "outlined" &&
          "border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-300 border px-4 py-2.5 text-sm focus:ring-4 focus:ring-opacity-50",
        variant === "filled" &&
          "bg-primary-500 hover:bg-primary-600 focus:ring-primary-300 px-4 py-2.5 text-sm text-white focus:ring-4 focus:ring-opacity-50"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

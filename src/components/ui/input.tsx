import { cn } from "@/src/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "w-full h-11 bg-white border border-gray-300 rounded-sm px-4 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-900",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

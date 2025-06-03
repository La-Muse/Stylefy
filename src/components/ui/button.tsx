import { cn } from "@/src/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer border-none",
          {
            "bg-gray-900 text-white hover:bg-gray-800 active:scale-98": variant === "default",
            "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 active:scale-98": variant === "outline",
            "bg-transparent text-gray-900 hover:bg-gray-100 active:translate-y-px": variant === "ghost",
          },
          {
            "h-12 px-5 text-sm rounded-sm min-w-30": size === "default",
            "h-8 px-3 text-xs rounded-sm": size === "sm",
            "h-12 px-6 text-base rounded-sm": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@bsf/lib/cn";

const buttonVariants = cva(["rounded text-sm font-medium transition"], {
  variants: {
    variant: {
      primary:
        "bg-sky-500 text-white hover:bg-sky-400 active:bg-sky-600 disabled:bg-sky-200",
    },
    size: {
      default: "text-md px-2.5 py-1.5",
      small: "px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Button;

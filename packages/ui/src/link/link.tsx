import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva(
  "text-sm font-semibold text-gray-900 decoration-2 transition hover:underline hover:underline-offset-4",
  {
    variants: {},
  },
);

interface LinkProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof linkVariants> {}

const Link = ({ className, ...props }: LinkProps) => {
  return <a className={linkVariants({ className })} {...props} />;
};

export default Link;

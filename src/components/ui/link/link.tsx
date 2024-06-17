import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const linkVariants = cva(
  'text-sm font-semibold text-gray-900 decoration-2 transition hover:underline hover:underline-offset-4',
  {
    variants: {},
  }
);

interface LinkProps
  extends React.ComponentProps<'a'>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

const Link = ({ asChild, className, ...props }: LinkProps) => {
  const Comp = asChild ? Slot : 'a';

  return <Comp className={linkVariants({ className })} {...props} />;
};

export default Link;

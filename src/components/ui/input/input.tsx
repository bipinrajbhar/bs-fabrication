import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'peer rounded border-none text-sm text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-70 data-[invalid=true]:ring-red-400'
);

interface InputProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={inputVariants({ className })} {...props} />;
};

Input.displayName = 'Input';

export default Input;

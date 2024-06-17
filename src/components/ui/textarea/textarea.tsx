import * as React from 'react';
import { cva } from 'class-variance-authority';

const textareaVariants = cva(
  'peer rounded border-none text-sm text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-70 data-[invalid]:ring-red-400'
);

const Textarea = ({
  className,
  ...props
}: React.ComponentProps<'textarea'>) => {
  return <textarea className={textareaVariants({ className })} {...props} />;
};

Textarea.displayName = 'Textarea';

export default Textarea;

import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps, cva } from 'class-variance-authority';

const labelVariants = cva(
  'text-sm font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-[invalid]:text-red-400'
);

interface LabelProps
  extends LabelPrimitive.LabelProps,
    VariantProps<typeof labelVariants> {}

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root className={labelVariants({ className })} {...props} />
  );
};

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;

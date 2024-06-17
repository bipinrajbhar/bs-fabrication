import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxVariants = cva(
  'flex h-4 w-4 items-center justify-center rounded text-sky-500 ring-1 ring-sky-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sky-500 data-[state=checked]:text-white',
  {
    variants: {},
  }
);

interface CheckboxProps
  extends CheckboxPrimitives.CheckboxProps,
    VariantProps<typeof checkboxVariants> {
  asChild?: boolean;
}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitives.Root
      className={checkboxVariants({ className })}
      {...props}
    >
      <CheckboxPrimitives.Indicator>
        <CheckIcon className="text-current" />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
};

Checkbox.displayName = CheckboxPrimitives.Root.displayName;

export default Checkbox;

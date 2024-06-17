import type { Meta, StoryObj } from '@storybook/react';
import InputComp from './input';

const meta = {
  title: 'components/ui/input',
  component: InputComp,
  args: {
    asChild: false,
    disabled: false,
    'data-invalid': false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof InputComp>;

export const Input: Story = {
  args: {},
};

export const InputWithError: Story = {
  args: {
    'data-invalid': true,
  },
};

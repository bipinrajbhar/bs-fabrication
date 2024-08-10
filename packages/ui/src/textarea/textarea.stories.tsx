import type { Meta, StoryObj } from '@storybook/react';
import TextareaComp from './textarea';

const meta = {
  title: 'components/ui/textarea',
  component: TextareaComp,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    asChild: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof TextareaComp>;

export const Textarea: Story = {
  args: {},
};

export const TextareaWithError: Story = {
  args: {
    'data-invalid': true,
  },
};

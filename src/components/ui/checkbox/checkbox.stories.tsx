import type { Meta, StoryObj } from '@storybook/react';
import CheckboxComp from './checkbox';

const meta = {
  title: 'components/ui/checkbox',
  component: CheckboxComp,
  args: {
    disabled: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof CheckboxComp>;

export const Checkbox: Story = {
  args: {},
};

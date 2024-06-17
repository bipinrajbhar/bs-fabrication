import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
  title: 'components/ui/button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    variant: {
      control: 'select',
      options: ['primary'],
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    children: 'Button',
  },
};

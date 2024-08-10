import type { Meta, StoryObj } from '@storybook/react';
import LinkComp from './link';

const meta = {
  title: 'components/ui/link',
  component: LinkComp,
  args: {
    disable: false,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof LinkComp>;

export const Link: Story = {
  args: {
    children: 'click me',
    href: '#',
  },
};

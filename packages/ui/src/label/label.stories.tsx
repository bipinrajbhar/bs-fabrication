import type { Meta, StoryObj } from '@storybook/react';
import LabelComp from './label';

const meta = {
  title: 'components/ui/label',
  component: LabelComp,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof LabelComp>;

export const Label: Story = {
  args: {
    children: 'Label',
  },
};

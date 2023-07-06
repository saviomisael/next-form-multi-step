import { Meta, StoryObj } from '@storybook/react';
import { DetailsInputs } from '.';

export default {
  title: 'components/DetailsInputs',
  component: DetailsInputs,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof DetailsInputs>;
type Story = StoryObj<typeof DetailsInputs>;

export const Default: Story = {
  render: () => <DetailsInputs />,
};

import { Meta, StoryObj } from '@storybook/react';
import { PreferencesBox } from '.';

export default {
  title: 'components/PreferencesBox',
  component: PreferencesBox,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof PreferencesBox>;
type Story = StoryObj<typeof PreferencesBox>;

export const Default: Story = {
  render: () => <PreferencesBox />,
};

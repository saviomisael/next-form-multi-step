import { Meta, StoryObj } from '@storybook/react';
import { TabForm } from '.';

export default {
  title: 'components/TabForm',
  component: TabForm,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof TabForm>;
type Story = StoryObj<typeof TabForm>;

export const NotLastStep: Story = {
  render: () => (
    <TabForm isLastStep={false} title="Test title">
      <label style={{ color: 'white', fontSize: '1.8rem' }} htmlFor="test">
        Test
      </label>
      <input type="text" name="test" />
    </TabForm>
  ),
};

export const LastStep: Story = {
  render: () => (
    <TabForm isLastStep title="Test title">
      <label style={{ color: 'white', fontSize: '1.8rem' }} htmlFor="test">
        Test
      </label>
      <input type="text" name="test" />
    </TabForm>
  ),
};

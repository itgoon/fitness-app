import type { Meta, StoryObj } from "@storybook/react";

import Component from "./TimerProgress";

const meta: Meta<typeof Component> = {
  title: "TimerProgress",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const TimerProgress: Story = {
  args: {}
};

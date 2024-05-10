import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Scheduler";

const meta: Meta<typeof Component> = {
  title: "Scheduler",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Scheduler: Story = {
  args: {}
};

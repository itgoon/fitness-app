import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Calendar";

const meta: Meta<typeof Component> = {
  title: "Calendar",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Calendar: Story = {
  args: {}
};

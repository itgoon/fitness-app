import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Switch";

const meta: Meta<typeof Component> = {
  title: "Switch",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Switch: Story = {
  args: {}
};

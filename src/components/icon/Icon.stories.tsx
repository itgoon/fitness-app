import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Icon";

const meta: Meta<typeof Component> = {
  title: "Icon",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Icon: Story = {
  args: {
    name: "Apple"
  }
};

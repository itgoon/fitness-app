import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Timeline";

const meta: Meta<typeof Component> = {
  title: "Timeline",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Timeline: Story = {
  args: {
    list: []
  }
};

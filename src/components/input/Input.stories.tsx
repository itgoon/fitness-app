import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Input";

const meta: Meta<typeof Component> = {
  title: "Input",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Input: Story = {
  args: {
    //  children: "Input"
    // variant: "filled",
    // color: "blue"
  }
};

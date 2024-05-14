import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Carousel";

const meta: Meta<typeof Component> = {
  title: "Carousel",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Checkbox: Story = {
  args: {
    // 
  }
};

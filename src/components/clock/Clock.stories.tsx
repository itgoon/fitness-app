import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Clock";

const meta: Meta<typeof Component> = {
  title: "Clock",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Map: Story = {
  args: {
    // children: "Map"
    // variant: "filled",
    // color: "blue"
  }
};

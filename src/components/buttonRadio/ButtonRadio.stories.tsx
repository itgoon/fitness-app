import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ButtonRadio";

const meta: Meta<typeof Component> = {
  title: "ButtonRadio",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ButtonRadio: Story = {
  args: {
    list: [
      { label: "A", value: "a" },
      { label: "B", value: "b" }
    ]
  }
};

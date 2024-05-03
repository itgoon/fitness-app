import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Select";

const meta: Meta<typeof Component> = {
  title: "Select",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    title: "허용거리",
    list: [
      { label: "1km", value: "11" },
      { label: "2km", value: "22" },
      { label: "3km", value: "33" },
      { label: "4km", value: "44" }
    ]
  }
};

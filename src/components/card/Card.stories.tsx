import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Card";

const meta: Meta<typeof Component> = {
  title: "Card",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Card: Story = {
  args: {
    children: <>안녕하세요</>,
    height: "100px",
    width: "300px"
  }
};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Menu";

const meta: Meta<typeof Component> = {
  title: "Menu",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Menu: Story = {
  args: {}
};

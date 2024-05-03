import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Tabs";

const meta: Meta<typeof Component> = {
  title: "Tabs",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Tabs: Story = {
  args: {}
};

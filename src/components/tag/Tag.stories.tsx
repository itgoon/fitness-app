import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Tag";

const meta: Meta<typeof Component> = {
  title: "Tag",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Tag: Story = {
  args: {}
};

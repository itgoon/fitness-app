import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Title";

const meta: Meta<typeof Component> = {
  title: "Title",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Title: Story = {
  args: {}
};

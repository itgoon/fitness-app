import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Avatar";

const meta: Meta<typeof Component> = {
  title: "Avatar",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Avatar: Story = {
  args: {
    src: ""
  }
};

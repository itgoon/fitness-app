import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Image";

const meta: Meta<typeof Component> = {
  title: "Image",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Image: Story = {
  args: {
    src: ""
  }
};

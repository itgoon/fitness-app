import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ModalPrograss"
const meta: Meta<typeof Component> = {
  title: "ModalPrograss",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ModalProgress: Story = {
  args: {}
};

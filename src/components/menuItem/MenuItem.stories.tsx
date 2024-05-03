import type { Meta, StoryObj } from "@storybook/react";

import dayjs from "dayjs";
import Component from "./MenuItem";

const meta: Meta<typeof Component> = {
  title: "MenuItem",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const MenuItem: Story = {
  args: {}
};

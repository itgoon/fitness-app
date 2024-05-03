import type { Meta, StoryObj } from "@storybook/react";

import dayjs from "dayjs";
import Component from "./Timepicker";

const meta: Meta<typeof Component> = {
  title: "Timepicker",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Timepicker: Story = {
  args: {
    value: dayjs().format("YYYY-MM-DD"),
    format: "YYYY월 M월 D일"
  }
};

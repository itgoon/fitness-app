import type { Meta, StoryObj } from "@storybook/react";

import dayjs from "dayjs";
import Component from "./Datepicker";

const meta: Meta<typeof Component> = {
  title: "Datepicker",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Datepicker: Story = {
  args: {
    value: dayjs().format("YYYY-MM-DD"),
    format: "YYYY월 M월 D일"
  }
};

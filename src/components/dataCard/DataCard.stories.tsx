import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DataCard";

const meta: Meta<typeof Component> = {
  title: "DataCard",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component>;

export const DataCard: Story = {
  args: {
    content: [
      {
        title: "매장 주소",
        sub: "서울 삼성동 삼성로 96길 24 이엠캐스트"
      }
    ]
  }
};

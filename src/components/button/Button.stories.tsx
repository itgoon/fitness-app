import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Button";

const meta: Meta<typeof Component> = {
  title: "Button",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Button",
      description: "Button Description"
    },
    variant: {
      control: "select",
      options: ["filled", "gradient", "outlined", "text"],
      defaultValue: "filled",
      description:
        "The Button component comes with 4 different variants that you can change it using the variant prop."
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      description:
        "The Button component comes with 3 different sizes that you can change it using the size prop."
    },

    fullWidth: {
      control: "boolean",
      defaultValue: false,
      options: [true, false]
    },

    color: {
      control: { type: "select" },
      defaultValue: "blue",
      options: ["blue", "red", "green", "amber"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Button: Story = {
  args: {
    children: "Button",
    variant: "contained",
    color: "primary"
  }
};

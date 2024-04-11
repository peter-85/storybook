import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";
import { colorVariants } from "@storybookConfig/utils";

const meta = {
  title: "Design System/Atoms/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md"],
      control: { type: "select" },
    },
    fontWeight: {
      options: [400, 500, 600, 700],
      control: { type: "select" },
    },
    color: {
      options: colorVariants,
      control: { type: "select" },
    },
  },
  args: {
    color: "black",
    size: "md",
    children: "Text in paragraph component",
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MD: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import type {} from "@storybook/types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design System/Atoms/Button",
  component: Button,

  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/78v3EtrAirvuDn3WoX0D3h/Sizes-%26-Templates?type=design&node-id=0-1&mode=design&t=SoqjPtWsfGVgUDne-0",
    },
  },
  // parameters: {
  // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  // layout: "centered",
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), label: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    ...Primary.args,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    ...Primary.args,
  },
};

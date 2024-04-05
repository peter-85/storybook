import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design System/Atoms/Button",
  component: Button,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ttuYjxsSIoCnKgBov9iWUG/Platform_BUs?type=design&node-id=1-4&mode=design&t=gKRehrtE98Fmnv5x-0",
    },

    docs: {
      description: {
        component: "Primary UI component for user interaction",
      },
    },
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Storybook is doing Automatic argType inference, but if we want to override something manually we can do it here in argTypes
  argTypes: {
    // render the prop without control
    onClick: {
      control: false,
    },
    extraStyles: {
      control: false,
    },
    text: {
      // this is shown in the documentation/description column
      description: "Button content",

      table: {
        // if we want to remove something from the table of the document and controls
        // disable: true,
        // defaultValue controls default column in the document table. if a default value is passed in the components it uses it. For example size and primary props
        defaultValue: {
          // if we want add additional info - it will be displayed in dropdown
          // detail: "details",
          summary: "button",
        },
      },
    },
    size: {
      // if we want to manipulate the control column in the table of docs and controls
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },

  args: {
    variant: "primary",
    text: "Button",
    size: "xl",
    isActive: false,
    isDisabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
  argTypes: {
    ...Primary.argTypes,
  },
};

export const XS: Story = {
  args: {
    size: "xs",
    ...Primary.args,
  },
};

export const SM: Story = {
  args: {
    size: "sm",
    ...Primary.args,
  },
};
export const MD: Story = {
  args: {
    size: "md",
    ...Primary.args,
  },
};
export const LG: Story = {
  args: {
    size: "lg",
    ...Primary.args,
  },
};

export const XL: Story = {
  args: {
    size: "xl",
    ...Primary.args,
  },
};

export const XXL: Story = {
  args: {
    size: "2xl",
    ...Primary.args,
  },
};

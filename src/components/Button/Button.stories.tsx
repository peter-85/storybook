import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "../themeTokens.stylex";

const newTheme = stylex.createTheme(themeTokens, {
  primary: "purple",
  secondary: "red",
});

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [
    (Story) => {
      return (
        <div {...stylex.props(newTheme)}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/78v3EtrAirvuDn3WoX0D3h/Sizes-%26-Templates?type=design&node-id=0-1&mode=design&t=SoqjPtWsfGVgUDne-0",
    },

    docs: {
      description: {
        component: "Primary UI component for user interaction",
      },
    },
  },
  // parameters: {
  // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  // layout: "centered",
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Storybook is doing Automatic argType inference, but if we want to override something manually we can do it here in argTypes
  argTypes: {
    // type: {
    //   table: {
    //     disable: false,
    //   },
    // },
    label: {
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
      // control: "check",
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //Define the default value for args
  args: { onClick: fn(), label: "Button", size: "medium" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
  argTypes: {
    // render the prop without control
    // type: {
    //   control: false,
    // },
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
  },
  argTypes: {
    ...Primary.argTypes,
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

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //adding layout on a global level
    layout: "centered",
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;

import React from "react";
import type { Preview } from "@storybook/react";
import { defaultTheme, sesameTheme } from "../src/components/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "./themes/ThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //adding layout on a global level
    // layout: "centered",
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        Default: defaultTheme,
        Sesame: sesameTheme,
      },
      defaultTheme: "Default",
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;

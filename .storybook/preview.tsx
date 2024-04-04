import React from "react";
import type { Preview } from "@storybook/react";
import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "../src/components/themeTokens.stylex";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

// const newTheme = stylex.createTheme(themeTokens, {
//   primary: "purple",
//   secondary: "red",
// });

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
        winbet: lightTheme,
        sesame: darkTheme,
      },
      defaultTheme: "winbet",
      Provider: ThemeProvider,
    }),
  ],
  // decorators: [
  //   (Story) => {
  //     return (
  //       <div
  //         style={{
  //           backgroundColor: "red",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Story />
  //       </div>
  //     );
  //   },
  // ],
};

export default preview;

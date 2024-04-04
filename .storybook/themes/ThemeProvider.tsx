import React from "react";
import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "../../src/components/themeTokens.stylex";

export const ThemeProvider = ({ ...props }: any) => {
  const newTheme = stylex.createTheme(themeTokens, {
    primary: "purple",
    secondary: "red",
  });

  return <div {...stylex.props(newTheme)}>{props.children}</div>;
};

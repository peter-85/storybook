import { themeTokens } from "../themeTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  button: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  },
});

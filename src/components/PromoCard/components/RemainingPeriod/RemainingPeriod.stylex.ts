import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "@components/themeTokens.stylex";

export const styles = stylex.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    opacity: 0.6,
    fill: "currentColor",
    whiteSpace: "nowrap",
    marginRight: "0.5rem",
  },
  text: {
    fontSize: "clamp(0.75rem, 0.678rem + 0.31vw, 0.875rem)",
    color: themeTokens.promoCardLayout2FooterColor,
  },
  icon: {
    verticalAlign: "middle",
    marginRight: "4px",
  },
});

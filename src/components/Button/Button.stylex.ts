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

export const sizeStyles = stylex.create({
  small: {
    fontSize: "11px",
    padding: `${themeTokens.spacingUnit1} ${themeTokens.spacingUnit2}`,
  },
  medium: {
    fontSize: themeTokens.fontSize6,
    padding: `${themeTokens.spacingUnit15} ${themeTokens.spacingUnit25}`,
  },
  large: {
    fontSize: themeTokens.fontSize5,
    padding: `${themeTokens.spacingUnit15} ${themeTokens.spacingUnit3}`,
  },
});

export const typeStyles = stylex.create({
  primary: { color: "white", backgroundColor: themeTokens.primary },
  secondary: {
    color: themeTokens.secondary,
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  },
});

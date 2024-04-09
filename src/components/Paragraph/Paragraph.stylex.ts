import { themeTokens } from "../themeTokens.stylex";
import { colorsMap } from "@src/types";
import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  base: {
    margin: 0,
  },
});

export const sizeStyles = stylex.create({
  xs: {
    fontSize: 10,
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14,
  },
});

export const colorStyles = stylex.create({
  getColor: (color) => ({
    // @ts-ignore
    color: themeTokens[colorsMap[color]],
  }),
});

export const fontStyles = stylex.create({
  getFont: (fontWeight) => ({
    fontWeight,
  }),
});

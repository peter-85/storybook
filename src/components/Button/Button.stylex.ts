import { themeTokens } from "../themeTokens.stylex";
import * as stylex from "@stylexjs/stylex";

const specialButtonStyles = {
  outline: "none",
  appearance: "none",
  border: 0,
};

export const styles = stylex.create({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    paddingTop: "5px",
    paddingBottom: "5px",
    textAlign: "center",
    lineHeight: "1.2",
    cursor: "pointer",
    fill: "currentColor",
    ":is([type='submit'])": specialButtonStyles,
    ":is([type='reset'])": specialButtonStyles,
    ":is([type='button'])": specialButtonStyles,
  },
  disabled: {
    cursor: "not-allowed",
  },
});

const xsButtonHeight = 22;
const smButtonHeight = 28;
const mdButtonHeight = 34;
const lgButtonHeight = 40;
const xlButtonHeight = 46;
const xxlButtonHeight = 54;

export const sizeStyles = stylex.create({
  xs: {
    gap: "4px",
    borderRadius: themeTokens.btnBorderRadiusSmall,
    padding: `5px ${xsButtonHeight / 2}px`,
    minHeight: `${xsButtonHeight}px`,
    fontSize: 12,
  },
  sm: {
    gap: "4px",
    borderRadius: themeTokens.btnBorderRadiusSmall,
    padding: `5px ${smButtonHeight / 2}px`,
    minHeight: `${smButtonHeight}px`,
    fontSize: 14,
  },
  md: {
    gap: "6px",
    borderRadius: themeTokens.btnBorderRadiusMedium,
    padding: `5px ${mdButtonHeight / 2}px`,
    minHeight: `${mdButtonHeight}px`,
    fontSize: 14,
  },
  lg: {
    gap: "6px",
    borderRadius: themeTokens.btnBorderRadiusMedium,
    padding: `5px ${lgButtonHeight / 2}px`,
    minHeight: `${lgButtonHeight}px`,
    fontSize: 16,
  },
  xl: {
    gap: "8px",
    borderRadius: themeTokens.btnBorderRadiusLarge,
    padding: `5px ${xlButtonHeight / 2}px`,
    minHeight: `${xlButtonHeight}px`,
    fontSize: 18,
    fontWeight: 700,
  },
  "2xl": {
    gap: "8px",
    borderRadius: themeTokens.btnBorderRadiusLarge,
    padding: `5px ${xxlButtonHeight / 2}px`,
    minHeight: `${xxlButtonHeight}px`,
    fontSize: 20,
    fontWeight: 700,
  },
});

export const variantStyles = stylex.create({
  primary: {
    color: {
      default: themeTokens.btnPrimaryColor,
      ":hover": themeTokens.btnPrimaryColorHover,
      ":is([active])": themeTokens.btnPrimaryColorActive,
      ":is([disabled])": themeTokens.btnPrimaryColorDisabled,
    },
    backgroundColor: {
      default: themeTokens.btnPrimaryBgColor,
      ":hover": themeTokens.btnPrimaryBgColorHover,
      ":is([active])": themeTokens.btnPrimaryBgColorActive,
      ":is([disabled])": themeTokens.btnPrimaryBgColorDisabled,
    },
  },
  secondary: {
    color: {
      default: themeTokens.btnSecondaryColor,
      ":hover": themeTokens.btnSecondaryColorHover,
      ":is([active])": themeTokens.btnSecondaryColorActive,
      ":is([disabled])": themeTokens.btnSecondaryColorDisabled,
    },
    backgroundColor: {
      default: themeTokens.btnSecondaryBgColor,
      ":hover": themeTokens.btnSecondaryBgColorHover,
      ":is([active])": themeTokens.btnSecondaryBgColorActive,
      ":is([disabled])": themeTokens.btnSecondaryBgColorDisabled,
    },
  },
});

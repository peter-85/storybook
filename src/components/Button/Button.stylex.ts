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

export const sizeStyles = stylex.create({
  xs: {
    gap: "4px",
    borderRadius: themeTokens.btnBorderRadiusSmall,
    padding: "5px 11px",
    minHeight: themeTokens.btnXsHeight,
    fontSize: 12,
  },
  sm: {
    gap: "4px",
    borderRadius: themeTokens.btnBorderRadiusSmall,
    padding: "5px 14px",
    minHeight: themeTokens.btnSmHeight,
    fontSize: 14,
  },
  md: {
    gap: "6px",
    borderRadius: themeTokens.btnBorderRadiusMedium,
    padding: "5px 17px",
    minHeight: themeTokens.btnMdHeight,
    fontSize: 14,
  },
  lg: {
    gap: "6px",
    borderRadius: themeTokens.btnBorderRadiusMedium,
    padding: "5px 20px",
    minHeight: themeTokens.btnLgHeight,
    fontSize: 16,
  },
  xl: {
    gap: "8px",
    borderRadius: themeTokens.btnBorderRadiusLarge,
    padding: "5px 23px",
    minHeight: themeTokens.btnXlHeight,
    fontSize: 18,
    fontWeight: 700,
  },
  "2xl": {
    gap: "8px",
    borderRadius: themeTokens.btnBorderRadiusLarge,
    padding: "5px 27px",
    minHeight: themeTokens.btnXxlHeight,
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

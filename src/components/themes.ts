import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "./themeTokens.stylex";

export const sesameOverrideTokens = {
  // btnSizes
  btnXsHeight: "24px",
  btnSmHeight: "30px",
  btnMdHeight: "36px",
  btnLgHeight: "42px",
  btnXlHeight: "48px",
  btnXxlHeight: "54px",

  //btn primary colors
  btnPrimaryColor: "#ffffff",
  btnPrimaryColorHover: "#ffffff",
  btnPrimaryColorActive: "#000000",
  btnPrimaryColorDisabled: "#ffffff",
  btnPrimaryBgColor: "#644091",
  btnPrimaryBgColorHover: "#00772a",
  btnPrimaryBgColorActive: "#f5ce6f",
  btnPrimaryBgColorDisabled3: "#9e9fa0",
  //btn secondary colors
  btnSecondaryColor: "#000000",
  btnSecondaryColorHover: "#000000",
  btnSecondaryColorActive: "#000000",
  btnSecondaryColorDisabled: "#000000",
  btnSecondaryBgColor: "#d7b247",
  btnSecondaryBgColorHover: "#f4d781",
  btnSecondaryBgColorActive: "#ffb800",
  btnSecondaryBgColorDisabled: "#c0bbc6",
  //btn radius
  btnBorderRadiusSmall: "20px",
  btnBorderRadiusMedium: "60px",
  btnBorderRadiusLarge: "60px",
};

export const defaultTheme = stylex.createTheme(themeTokens, {});
export const sesameTheme = stylex.createTheme(
  themeTokens,
  sesameOverrideTokens
);

import * as stylex from "@stylexjs/stylex";

export const colors = {
  // colors
  primaryColor: "#e42313",
  primaryDarkColor: "#b4001f",
  primaryDarkestColor: "#8b0013",
  yellowColor: "#fce34c",
  yellowLightColor: "#fce34c",
  greenColor: "#00df1e",
  greenDarkColor: "#19b14e",
  successColor: "#00df1e",
  successDarkColor: "#19b14e",
  dangerColor: "#ff0023",
  dangerDarkColor: "#b4001f",
  errorColor: "#f5ce6f",
  errorDarkColor: "#f09c5e",
  infoColor: "#08bdff",
  infoDarkColor: "#2a75ff",
  whiteColor: "#fff",
  blackColor: "#000",
  grey100Color: "#e9ecef",
  grey200Color: "#dedede",
  grey300Color: "#cfd0d1",
  grey400Color: "#9e9fa0",
  grey500Color: "#636465",
  grey600Color: "#5c5d5e",
  grey700Color: "#575859",
  grey800Color: "#48494a",
  grey900Color: "#323334",
};

export const themeTokens = stylex.defineVars({
  // colors
  ...colors,
  //btn primary colors
  btnPrimaryColor: "#ffffff",
  btnPrimaryColorHover: "#ffffff",
  btnPrimaryColorActive: "#000000",
  btnPrimaryColorDisabled: "#ffffff",
  btnPrimaryBgColor: "#19b14e",
  btnPrimaryBgColorHover: "#00772a",
  btnPrimaryBgColorActive: "#f5ce6f",
  btnPrimaryBgColorDisabled: "#9e9fa0",
  //btn secondary colors
  btnSecondaryColor: "#e9ecef",
  btnSecondaryColorHover: "#e9ecef",
  btnSecondaryColorActive: "#4c4c4c",
  btnSecondaryColorDisabled: "#e9ecef",
  btnSecondaryBgColor: "#4c4c4c",
  btnSecondaryBgColorHover: "#9e9fa0",
  btnSecondaryBgColorActive: "#cfd0d1",
  btnSecondaryBgColorDisabled: "#9e9fa0",

  btnBorderRadiusSmall: "2px",
  btnBorderRadiusMedium: "2px",
  btnBorderRadiusLarge: "2px",
  // break points
  breakPointsMobileMini: "360",
  breakPointsMobile: "768",
  breakPointsTabletOrMobile: "1024",
  breakPointsDesktop: "1025",
  breakPointsDesktopLarge: "1366",
  breakPointsDesktopExtraLarge: "1599",
  breakPointsMobileMiniDown: "359",
  breakPointsDesktopUXL: "1800",

  //promo card
  promoCardLayout2BodyBg: "#545454",
  promoCardLayout2ImageBg: "null",
  promoCardLayout2BorderRadius: "6px",
  promoCardImageLayout2BorderRadius: "6px",
  promoCardLayout2Shadow: "drop-shadow(rgba(0, 0, 0, 0.3) 0px 3px 6px)",
  promoCardLayout2TitleColor: colors.whiteColor,
  promoCardLayout2ImageTitleColor: colors.whiteColor,
  promoCardLayout2DescriptionColor: colors.whiteColor,
  promoCardLayout2FooterColor: colors.whiteColor,
});

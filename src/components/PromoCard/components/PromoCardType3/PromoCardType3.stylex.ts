import * as stylex from "@stylexjs/stylex";
import { themeTokens } from "@components/themeTokens.stylex";

export const MEDIA_MOBILE = "@media (min-width: 768px)";
export const MEDIA_DESKTOP = "@media (min-width: 1025px)";

export const styles = stylex.create({
  wrapper: (imageSource) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: {
      default: "200px",
      [MEDIA_MOBILE]: "205px",
      [MEDIA_DESKTOP]: "216px",
    },
    willChange: "transform",
    cursor: "pointer",
    borderRadius: themeTokens.promoCardLayout3BorderRadius,
    color: themeTokens.promoCardLayout3DescriptionColor,
    transition: "height 0.15s",
    backgroundImage: `url(${imageSource})`,
    backgroundSize: "contain",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundColor: themeTokens.promoCardLayout3DescriptionBg,
    padding:
      "clamp(1.125rem, 1.055rem + 0.3vw, 1.25rem) clamp(0.75rem, 0.539rem + 0.9vw, 1.125rem)",
    boxSizing: "border-box",
  }),
  title: {
    marginBottom: "clamp(0.75rem, 0.539rem + 0.9vw, 1.125rem)",
    fontSize: "clamp(1.125rem, 1.055rem + 0.3vw, 1.25rem)",
    maxWidth: "60%",
    lineHeight: 1.2,
    color: themeTokens.promoCardLayout3TitleColor,
  },
  detailsDescription: {
    minHeight: "clamp(2.75rem, calc(2.497rem + 1.08vw), 3.188rem)",
    maxWidth: " 60%",
    lineHeight: 1.2,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    justifyContent: "space-between",
  },
});

import { themeTokens } from "@components/themeTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export const MEDIA_MOBILE = "@media (min-width: 768px)";
export const MEDIA_DESKTOP = "@media (min-width: 1025px)";

export const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    willChange: "transform",
    cursor: "pointer",
    overflow: "hidden",
    filter: themeTokens.promoCardLayout1Shadow,
    borderRadius: themeTokens.promoCardLayout2BorderRadius,
  },
  image: (imageSource) => ({
    backgroundImage: `url(${imageSource})`,
    transition: "height 0.15s",
    height: {
      default: "355px",
      [MEDIA_MOBILE]: "290px",
      [MEDIA_DESKTOP]: "286px",
    },
  }),
  details: {
    flex: 1,
    display: "grid",
    gridAutoRows: {
      default: "20px 1fr 0.3fr",
      [MEDIA_DESKTOP]: "28px 1fr 0.3fr",
    },
    padding: "8px",
    rowGap: "8px",
    gridTemplateAreas: `'title'
      'description'
      'footer'`,
    transition: "border 0.15s, gridAutoRows 0.15s",
    borderTopColor: themeTokens.promoCardLayout1DescriptionBorderTopColor,
    borderTopStyle: "solid",
    borderTopWidth: {
      default: "1px",
      [MEDIA_DESKTOP]: "2px",
    },
    backgroundColor: themeTokens.promoCardLayout1DescriptionBg,
  },
  title: {
    gridArea: "title",
    fontSize: "clamp(0.875rem, 0.761rem + 0.57vw, 1.125rem)",
    color: themeTokens.promoCardLayout1TitleColor,
  },
  detailsDescription: {
    gridArea: "description",
    placeSelf: "start",
    minHeight: "clamp(2.625rem, 2.264rem + 1.54vw, 3.25rem)",
    fontSize: "clamp(0.75rem, 0.693rem + 0.28vw, 0.875rem)",
  },
  footer: {
    gridArea: "footer",
    placeSelf: "end stretch",
    color: themeTokens.promoCardLayout2FooterColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

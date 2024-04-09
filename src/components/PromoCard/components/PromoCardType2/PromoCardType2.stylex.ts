import { themeTokens } from "../../../themeTokens.stylex";
import * as stylex from "@stylexjs/stylex";

const MEDIA_MOBILE = `@media (min-width: ${themeTokens.breakPointsMobile})`;
const MEDIA_DESKTOP = `@media (min-width: ${themeTokens.breakPointsMobile})`;

export const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    willChange: "transform",
    cursor: "pointer",
    overflow: "hidden",
    filter: themeTokens.promoCardLayout2Shadow,
  },
  title: {
    minHeight: "clamp(1.375rem, 1.014rem + 1.54vw, 2rem)", // For when title is missing
    fontSize: "clamp(0.875rem, calc(0.731rem + 0.62vw), 1.125rem)",
    color: themeTokens.promoCardLayout2TitleColor,
  },
  cardWrapper: {
    borderRadius: themeTokens.promoCardLayout2BorderRadius,
    backgroundColor: themeTokens.promoCardLayout2BodyBg,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
  },
  image: (imageSource) => ({
    backgroundImage: `url(${imageSource})`,
    flexShrink: 0,
    display: "grid",
    gridTemplateRows: "repeat(1, 1fr)",
    gridTemplateColumns: "repeat(1, 1fr)",
    width: "100%",
    minHeight: {
      default: "234px",
      [MEDIA_MOBILE]: "290px",
      [MEDIA_DESKTOP]: "320px",
    },
    aspectRatio: "1",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "height 0.15s",
    borderRadius: themeTokens.promoCardImageLayout2BorderRadius,
    backgroundColor: themeTokens.promoCardLayout2ImageBg,
  }),
  imageTitle: {
    padding: "8px",
    placeSelf: "end start",
    lineHeight: 1.2,
    fontSize: "clamp(0.75rem, calc(0.606rem + 0.62vw), 1rem)",
    color: themeTokens.promoCardLayout2ImageTitleColor,
  },
  details: {
    flexGrow: "1",
    display: "grid",
    gridGap: "8px",
    padding: "8px",
  },
  detailsDescription: {
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "-o-ellipsis-lastline",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3,
    minHeight: "clamp(2.75rem, calc(2.497rem + 1.08vw), 3.188rem)",
    lineHeight: 1.2,
    color: themeTokens.promoCardLayout2DescriptionColor,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    justifyContent: "space-between",
    color: themeTokens.promoCardLayout2FooterColor,
  },
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

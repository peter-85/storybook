import * as stylex from "@stylexjs/stylex";

export const commonStyles = stylex.create({
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  textTruncateClamp: (numberOfLines) => ({
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: numberOfLines,
    WebkitBoxOrient: "vertical",
  }),
  bgCover: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
});

import { Colors, Sizes, FontWeights } from "@src/types";
import type { StyleXStyles } from "@stylexjs/stylex";

type ParagraphSizes = Extract<Sizes, "xs" | "sm" | "md">;

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: ParagraphSizes;
  color?: Colors;
  fontWeight?: FontWeights;
  extraStyles?: StyleXStyles;
}

import * as stylex from "@stylexjs/stylex";
import {
  styles,
  colorStyles,
  sizeStyles,
  fontStyles,
} from "./Paragraph.stylex";
import { ParagraphProps } from "./Paragraph.types";

const Paragraph: React.FC<ParagraphProps> = ({
  size = "md",
  color = "white",
  children,
  fontWeight = 400,
  extraStyles,
}) => {
  return (
    <div
      {...stylex.props(
        styles.base,
        sizeStyles[size],
        colorStyles.getColor(color),
        fontStyles.getFont(fontWeight),
        extraStyles
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;

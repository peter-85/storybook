import { Sizes, ButtonVariants } from "@src/types";
import type { StyleXStyles } from "@stylexjs/stylex";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  variant?: ButtonVariants;
  size?: Sizes;
  extraStyles?: StyleXStyles;
  isActive?: boolean;
  isDisabled?: boolean;
}

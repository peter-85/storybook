import { Sizes, ButtonVariants } from "@src/types";
import type { StyleXStyles } from "@stylexjs/stylex";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  extraStyles?: StyleXStyles;
  text?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

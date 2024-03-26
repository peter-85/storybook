import { styles, sizeStyles, typeStyles } from "./Button.styles";
import * as stylex from "@stylexjs/stylex";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button = ({
  type = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      {...stylex.props(styles.button, sizeStyles[size], typeStyles[type])}
      {...props}
    >
      {label}
    </button>
  );
};

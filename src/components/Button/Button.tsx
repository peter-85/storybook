import { HTMLCustomAttributes } from "react";
import { styles, sizeStyles, variantStyles } from "./Button.stylex";
import * as stylex from "@stylexjs/stylex";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps & HTMLCustomAttributes<HTMLDivElement>> = ({
  variant = "primary",
  size = "xl",
  text,
  isActive,
  isDisabled,
  onClick,
  extraStyles,
  ...rest
}) => {
  const activeProp = isActive ? { active: isActive } : undefined;
  const disabledProp = isDisabled ? { disabled: isDisabled } : undefined;
  const handleClick = !isDisabled ? { onClick: onClick } : undefined;

  return (
    <div
      role='button'
      {...activeProp}
      {...disabledProp}
      c-size={size}
      c-variant={variant}
      {...rest}
      {...handleClick}
      {...stylex.props(
        styles.button,
        sizeStyles[size],
        variantStyles[variant],
        isDisabled && styles.disabled,
        extraStyles
      )}
    >
      {text}
    </div>
  );
};

export default Button;

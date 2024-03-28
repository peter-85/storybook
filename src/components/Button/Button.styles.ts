import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  button: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  },
});

export const sizeStyles = stylex.create({
  small: { fontSize: "11px", padding: "8px 14px" },
  medium: { fontSize: "14px", padding: "11px 20px" },
  large: { fontSize: "16px", padding: "12px 24px" },
});

export const typeStyles = stylex.create({
  primary: { color: "white", backgroundColor: "#1ea7fd" },
  secondary: {
    color: "#339",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  },
});

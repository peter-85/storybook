import React from "react";
import * as stylex from "@stylexjs/stylex";

export const ThemeProvider = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...stylex.props(props.theme)}
    >
      {props.children}
    </div>
  );
};

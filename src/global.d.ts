import React, { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "egtd-s-promo-card": DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
      "egtd-btn": DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
    }
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }
}

declare module "react" {
  interface HTMLCustomAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    class?: string;
    style?: string;
  }
}

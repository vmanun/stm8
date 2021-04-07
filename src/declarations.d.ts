import { CSSProperties } from "react";

export type ScopedStyleSheet = Record<string, CSSProperties>;
export type ComponentProperties = {
  [p: string]: any;
};

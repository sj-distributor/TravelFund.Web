import { ReactNode } from "react";

export interface RouterType {
  path: string;
  name: string;
  element: ReactNode;
  icon?: string;
  children?: RouterType[];
}

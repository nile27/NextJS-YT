import React from "react";
import { LayoutProps } from "../type";

const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      library
      {children}
    </div>
  );
};

export default layout;

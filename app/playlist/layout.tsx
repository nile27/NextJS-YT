import React from "react";
import { LayoutProps } from "../type";
import Header from "@/components/Header";
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;

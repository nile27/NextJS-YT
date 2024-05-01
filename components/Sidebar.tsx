import React from "react";
import { LayoutProps } from "../app/type";
import Logo from "./element/Logo";
import Navigator from "./element/Navigator";

export const Sidebar = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};
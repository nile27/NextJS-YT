"use client";
import { cn } from "@/lib/utils";
import React from "react";

const WhiteButton = ({
  icon = <></>,
  label,
  className = "",
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        " cursor-pointer hover:bg-neutral-200 bg-white text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2 ",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;

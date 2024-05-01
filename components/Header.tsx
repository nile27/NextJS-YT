import React from "react";
import Image from "next/image";
import { LayoutProps } from "../app/type";

const Header = ({ children }: LayoutProps) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full ">
          <Image
            fill
            alt="background-img"
            className="object-cover"
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
        </div>
        <div className="absolute top-0 bg-black opacity-40 w-full h-full"></div>
      </section>
      <section>{children}</section>
    </header>
  );
};

export default Header;

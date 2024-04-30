"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { FiMusic, FiPlus, FiCompass } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlaylistNav";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);
  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((routes) => {
          return (
            <Link href={routes.href} key={routes.label}>
              <div
                className={cn(
                  "text-[16px] flex flex-row ites-center gap-4 hover:bg-neutral-700 rounded-lg p-2 ",
                  routes.isActive && "bg-neutral-800"
                )}
              >
                {routes.icon}
                <span>{routes.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>
      <section className="px-6">
        <div className="flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] gap-2 justify-center hover:bg-neutral-600 cursor-pointer">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playlist) => {
            return (
              <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default Navigator;

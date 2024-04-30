"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { FiMusic, FiPlus, FiCompass } from "react-icons/fi";
import { GoHome } from "react-icons/go";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {}, [pathname]);
  return <div>Navigator</div>;
};
export default Navigator;

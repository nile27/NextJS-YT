"use client";
import useUiState from "@/hooks/useUiState";
import React, { useEffect } from "react";

const HeaderBgChanger = ({ imageSrc }) => {
  const { setHeaderImageSrc } = useUiState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc]);
  return <div>HeaderBgChanger</div>;
};

export default HeaderBgChanger;

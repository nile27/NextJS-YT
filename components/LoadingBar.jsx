"use client";
import React from "react";
import { BarLoader } from "react-spinners";

// cssOverride: tailwind CSS가 지원을 해주지 못할 때 사용가능
// use client를 사용하지 않으면 SSR이 현상으로 애니메이션이 움직이지 않는 초기 화면을 것
// BarLoader안에 useState같은 리액트의 CSR함수를 사용해서 use client를 사용함
// globals.css를 사용해서 use client없이도 로딩 애니메이션 제작 가능

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: " 100%" }} />
    </div>
  );
};

export default LoadingBar;

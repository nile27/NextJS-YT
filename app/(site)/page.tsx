import { sleep } from "@/lib/utils";
import React from "react";
// 폴더명에 ()대괄호를 써주게 되면 경로에 지장이 가지 않음
const Home = async () => {
  return (
    <div className="min-h-[600px]">
      {" "}
      <div className="h-[500px] bg-neutral-700"> homepage</div>
      <div className="h-[500px] bg-neutral-700"> homepage</div>
      <div className="h-[500px] bg-neutral-700"> homepage</div>
      <div className="h-[500px] bg-neutral-700"> homepage</div>
    </div>
  );
};

export default Home;

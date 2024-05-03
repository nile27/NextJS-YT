import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
// 폴더명에 ()대괄호를 써주게 되면 경로에 지장이 가지 않음
const Home = async () => {
  return (
    <div className="min-h-[600px]">
      <div className="mt-9">
        <Category />
      </div>
    </div>
  );
};

export default Home;

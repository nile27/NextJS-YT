import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import Usericon from "@/components/Usericon";

// 폴더명에 ()대괄호를 써주게 되면 경로에 지장이 가지 않음
const Home = async () => {
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9">
          <Category />
          <div className="mt-12"></div>
          {/* carousel */}
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <Usericon size={"lg"} />
              </div>
            }
            title="다시 듣기"
            subTitle="야야아,"
          />
        </div>
      </div>
    </PagePadding>
  );
};

export default Home;

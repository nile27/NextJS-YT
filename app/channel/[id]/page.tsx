import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";

import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";

import PlayListCarousel from "@/components/PlayListCarousel";
import ChannelHead from "../components/ChannelHead";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const channel = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id));

  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, key) => {
              return <SongCardRowExpand key={key} song={song} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">앨범</div>
        <PlayListCarousel
          playlistArray={channel.playlistArray}
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
};

export default channel;

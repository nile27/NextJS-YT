import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";
import DarkButton from "@/components/element/DarkButton";
import WhiteButton from "@/components/element/WhiteButton";
import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";
import { FiMusic, FiShuffle } from "react-icons/fi";
import PlayListCarousel from "@/components/PlayListCarousel";

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
      <section>
        <div className=" text-[28px] font-bold">{channel.name}</div>
        <article className="mt-4 lg:hidden">
          <div>
            <DarkButton
              className={"w-[230px] flex justify-center"}
              label={"구독중 4.18만"}
            ></DarkButton>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton
              label={"셔플"}
              icon={<FiShuffle size={16} />}
            ></WhiteButton>
            <WhiteButton
              label={"뮤직"}
              icon={<FiMusic size={16} />}
            ></WhiteButton>
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton
            label={"셔플"}
            icon={<FiShuffle size={16} />}
          ></WhiteButton>
          <WhiteButton
            label={"뮤직"}
            icon={<FiMusic size={16} />}
          ></WhiteButton>
          <DarkButton
            className={"w-[230px] flex justify-center"}
            label={"구독중 4.18만"}
          ></DarkButton>
        </div>
      </section>
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

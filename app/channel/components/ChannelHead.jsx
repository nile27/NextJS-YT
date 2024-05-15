"use client";
import React from "react";
import DarkButton from "@/components/element/DarkButton";
import WhiteButton from "@/components/element/WhiteButton";
import { FiMusic, FiShuffle } from "react-icons/fi";
import usePlayerState from "@/hooks/usePlayerState";

function shffleArray(arr) {
  const shuffledArr = arr.slice();

  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

const ChannelHead = ({ channel }) => {
  const { addSongList } = usePlayerState();

  const onClickShuffle = () => {
    addSongList(shffleArray(channel.songList));
  };
  return (
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
            onClick={onClickShuffle}
            label={"셔플"}
            icon={<FiShuffle size={16} />}
          ></WhiteButton>
          <WhiteButton
            onClick={onClickShuffle}
            label={"뮤직"}
            icon={<FiMusic size={16} />}
          ></WhiteButton>
        </div>
      </article>
      <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
        <WhiteButton
          label={"셔플"}
          onClick={onClickShuffle}
          icon={<FiShuffle size={16} />}
        ></WhiteButton>
        <WhiteButton label={"뮤직"} icon={<FiMusic size={16} />}></WhiteButton>
        <DarkButton
          className={"w-[230px] flex justify-center"}
          label={"구독중 4.18만"}
        ></DarkButton>
      </div>
    </section>
  );
};

export default ChannelHead;

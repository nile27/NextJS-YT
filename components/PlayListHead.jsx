"use client";
import React from "react";
import IconButton from "./element/IconButton";
import { FiMoreVertical, FiPlay, FiFolderPlus } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "@/components/element/WhiteButton";
import DarkButton from "@/components/element/DarkButton";
import usePlayerState from "@/hooks/usePlayerState";

const PlayListHead = ({ playlist = {} } = {}) => {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  const { addSongList } = usePlayerState();

  const onClickPlayList = () => {
    addSongList(songList);
  };
  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className=" relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songimg" fill src={randomSong?.imageSrc} />
        </div>
        <article className=" flex flex-col justify-center">
          <div className=" font-bold text-[28px]">{playlistName}</div>
          <div className=" text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 * ${owner} * 2019`}</div>
            <div>{`${songList.length}곡 * 15분`}</div>
          </div>
          <ul className="hidden flex-row gap-4 mt-4 lg:flex">
            <WhiteButton
              onClick={onClickPlayList}
              className={"w-[85px] text-[14px]"}
              icon={<FiPlay />}
              label="재생"
            />
            <DarkButton
              className={"w-[135px] text-[14px]"}
              icon={<FiFolderPlus />}
              label={"보관함에 저장"}
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[85px] text-[14px]"}
          icon={<FiPlay />}
          label="재생"
          onClick={onClickPlayList}
        />
        <DarkButton
          className={"w-[135px] text-[14px]"}
          icon={<FiFolderPlus />}
          label={"보관함에 저장"}
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;

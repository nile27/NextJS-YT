"use client";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./element/IconButton";
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };
  return (
    <article
      className="flex flex-row gap-4 items-center 
    h-[48px] w-full relative group
    "
    >
      <div className=" w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className=" object-cover" />
        <section className=" hidden group-hover:flex absolute w-[48px] h-[48px] justify-center bg-black cursor-pointer items-center ">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className=" flex flex-row items-center gap-4">
        <div className=" flex flex-row gap-4 justify-between basis-1/3">
          <div className=" w-[130px] truncate">{song.name}</div>
          <div
            onClick={onClickChannel}
            className=" text-neutral-500 hover:underline cursor-pointer"
          >
            {channel}
          </div>
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 items-center flex-row h-[40px] 2-full justify-end  w-[120px] bg-black bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;

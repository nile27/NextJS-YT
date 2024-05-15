"use client";
import { TopSong } from "@/types";
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
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { addSongList } = usePlayerState();

  const onClickPlay = () => {
    addSongList([song]);
  };
  return (
    <article
      className="flex flex-row gap-4 items-center 
    h-[48px] w-full relative group
    "
    >
      <div className=" w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className=" object-cover" />
        <section
          onClick={onClickPlay}
          className=" hidden group-hover:flex absolute w-[48px] h-[48px] justify-center bg-black cursor-pointer items-center "
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className=" flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={8} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
        <div>
          <div>{song.name}</div>
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 items-center flex-row h-[40px] 2-full justify-end  w-1/2 bg-black bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;

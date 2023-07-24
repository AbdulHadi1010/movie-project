import React, { useState } from "react";
import starImg from "../assets/star-image.png";
import CustomModal from "../CustomModal";
export default function MovieCardsLong({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="p-8 justify-center  items-center w-full rounded hover:cursor-pointer">
      <img
        src={ImgLink + props.poster_path}
        alt="Poster"
        className="rounded "
        onClick={handleOpen}
      />
      <div className="font-bold text-xl text-left py-4 pl-2">{props.title}</div>
      <div className="flex pl-2">
        <div className="w-4 pt-0.5 ">
          <img src={starImg} />
        </div>
        <div className="font-bold pl-2 text-sm">{props.vote_average}</div>
        <div className="pl-2 text-sm">
          <span>(</span>
          {props.vote_count}
          <span>)</span>
        </div>
      </div>
      <CustomModal myClose={() => setOpen(false)} myOpen={open} data={props} />
    </div>
  );
}

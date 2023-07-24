import React, { useState } from "react";

import starImg from "../assets/star-image.png";
import CustomModal from "../CustomModal";

export default function MovieCardsWide({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="p-8 rounded hover:cursor-pointer shrink-0">
      <img
        src={ImgLink + props.backdrop_path}
        alt="Poster"
        className="rounded"
        onClick={handleOpen}
      />
      <div className="font-bold text-xl text-left py-4 pl-2">
        {props?.title || props?.name}
      </div>
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

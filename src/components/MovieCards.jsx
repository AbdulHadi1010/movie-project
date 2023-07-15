import React from "react";
import starImg from "../assets/star-image.png";
export default function MovieCards({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="ml-4 pb-4 rounded hover:cursor-pointer shrink-0 w-1/4 mr-4">
      <img
        src={ImgLink + props.backdrop_path}
        alt="Poster"
        className="rounded"
      />
      <div className="font-bold text-xl text-left py-4 pl-2">
        {props.original_title}
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
    </div>
  );
}

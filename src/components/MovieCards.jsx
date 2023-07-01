import React from "react";
import starImg from "../assets/star-image.png";
export default function MovieCards({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/w300`;
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer">
      <img
        src={ImgLink + props.poster_path}
        alt="Poster"
        className="w-full rounded "
      />
      <div className="font-bold text-md text-left py-4 pl-2 overflow-hidden whitespace-nowrap	">
        {props.original_title}
      </div>
      <div className="flex">
        <div className="w-4 bottom-0 pt-1">
          <img src={starImg} />
        </div>
        <div className="font-bold pl-2">{props.vote_average}</div>
        <div className="pl-2 ">
          <span>(</span>
          {props.vote_count}
          <span>)</span>
        </div>
      </div>
    </div>
  );
}

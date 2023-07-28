import React, { useEffect, useState } from "react";
import starImg from "../assets/star-image.png";
import CustomModal from "./CustomModal";
export default function MovieCardsLong({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="p-8 justify-center  items-center w-full rounded hover:cursor-pointer">
      <img
        src={ImgLink + props.poster_path}
        alt="Poster"
        className="rounded "
        onClick={handleOpen}
      />
      <div className="font-bold text-xs md:text-sm  lg:text-xl text-left py-4 pl-2">
        {props.title || props.name}
      </div>
      {width > breakPoint ? (
        <div className="flex pl-2">
          <div className="w-2 pt-1 md:pt-0.5 lg:pt-0.5 md:w-3 xl:w-4">
            <img src={starImg} />
          </div>
          <div className="font-bold pl-2 text-xs md:text-sm lg:text-sm">
            {props.vote_average}
          </div>
          <div className="pl-2 text-xs  md:text-sm lg:text-sm">
            <span>(</span>
            {props.vote_count}
            <span>)</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <CustomModal myClose={() => setOpen(false)} myOpen={open} data={props} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
export default function MainMovieCards({ props }) {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="w-full hover:cursor-pointer">
      <img
        src={ImgLink + props.backdrop_path}
        alt="Poster"
        className="rounded "
      />
      <div className="font-bold absolute text-base md:text-2xl lg:text-3xl text-left pt-16 py-4 pl-2 top-1/2">
        {props.title}
        {width > breakPoint ? (
          <div className="font-semibold text-lg pt-4 w-1/2 text-justify">
            {props.overview}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

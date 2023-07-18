import React, { useRef, useState } from "react";
import wallpaper from "./assets/wallpaper.jpg";
import MainPageNavigation from "./MainPageNavigation";
import MainPagePagination from "./MainPagePagination";
import MainPageAutoPlay from "./MainPageAutoPlay";
import "./MainApp.css";

export default function MainApp() {
  return (
    <div>
      <div className="max-w-screen overflow-x-hidden">
        <div className="w-full flex p-6 absolute" id="Linear-Gradient">
          <text className="text-white text-2xl px-8 font-semibold">
            Website Name
          </text>
          <div className="m-auto flex flex-1 max-w-full justify-end">
            <div className="flex justify-between">
              <text className="text-white text-2xl px-8 font-semibold">
                Home
              </text>
              <text className="text-white text-2xl px-8 font-semibold">
                Discover
              </text>
              <text className="text-white text-2xl px-8 font-semibold">
                Trending
              </text>
              <text className="text-white text-2xl px-8 font-semibold">
                Movies
              </text>
              <text className="text-white text-2xl px-8 font-semibold">
                TV Shows
              </text>
            </div>
          </div>
        </div>
        <img src={wallpaper} />
      </div>
      <div className="top-3/4 absolute w-screen bg-[#242424]">
        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Top Rated
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/movie/top_rated"}
        />
        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Just Release
        </div>
        <MainPageNavigation
          apilink={"https://api.themoviedb.org/3/discover/movie"}
        />

        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Upcoming
        </div>
        <MainPagePagination
          props={"https://api.themoviedb.org/3/movie/upcoming"}
        />
      </div>
    </div>
  );
}

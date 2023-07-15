import React from "react";
import wallpaper from "./assets/wallpaper.jpg";
import MainPage from "./MainPage";
import TvShowPage from "./TvShowPage";
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

      <div className="w-full absolute top-3/4 bg-black/95 overflow-x-scroll">
        <div className="text-white text-3xl py-2 px-4 font-bold text-start">
          Just Release
        </div>
        <MainPage />
      </div>
    </div>
  );
}

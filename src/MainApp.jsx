import React from "react";
import wallpaper from "./assets/wallpaper.jpg";
import MainPage from "./MainPage";
import TvShowPage from "./TvShowPage";
import "./MainApp.css";

export default function MainApp() {
  return (
    <div>
      <div className="max-w-full ">
        <div className="w-full flex p-6 fixed" id="Linear-Gradient">
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
        <div className="max-w-full absolute top-3/4 bg-black/95">
          <MainPage />
        </div>
        <img src={wallpaper} />
      </div>
    </div>
  );
}

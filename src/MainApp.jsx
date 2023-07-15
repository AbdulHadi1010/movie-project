import React from "react";
import wallpaper from "./assets/wallpaper.jpg";
import MainPage from "./MainPage";
import TvShowPage from "./TvShowPage";
export default function MainApp() {
  return (
    <div className="max-w-full opacity-100 ">
      <div className="w-full absolute flex p-6">
        <text className="text-black text-2xl px-8 font-semibold">
          Website Name
        </text>
        <div className="m-auto flex flex-1 max-w-full justify-end">
          <div className="flex justify-between">
            <text className="text-black text-2xl px-8 font-semibold">Home</text>
            <text className="text-black text-2xl px-8 font-semibold">
              Discover
            </text>
            <text className="text-black text-2xl px-8 font-semibold">
              Trending
            </text>
            <text className="text-black text-2xl px-8 font-semibold">
              Movies
            </text>
            <text className="text-black text-2xl px-8 font-semibold">
              TV Shows
            </text>
          </div>
        </div>
      </div>
      <img src={wallpaper} />
    </div>
  );
}

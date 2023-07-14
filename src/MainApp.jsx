import React from "react";
import wallpaper from "./assets/wallpaper.jpg";
import MainPage from "./MainPage";
import TvShowPage from "./TvShowPage";
export default function MainApp() {
  return (
    <div className="w-screen relative ">
      <div className="w-screen absolute flex p-6 justify-evenly">
        <text className="text-black text-2xl px-8">Website Name</text>
        <div className="m-auto">
          <text className="text-black text-2xl px-8">Home</text>
          <text className="text-black text-2xl px-8">Discover</text>
          <text className="text-black text-2xl px-8">Movies</text>
          <text className="text-black text-2xl px-8">TV Shows</text>
        </div>
      </div>
      <div className="bg-cover opactiy-50">
        <img src={wallpaper} />
      </div>
    </div>
  );
}

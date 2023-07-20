import React, { useRef, useState } from "react";
import MainPageNavigation from "./MainPageNavigation";
import MainPagePagination from "./MainPagePagination";
import MainPageAutoPlay from "./MainPageAutoPlay";
import "./MainApp.css";
import FrontAutoPlay from "./FrontAutoPlay";
import MovieCardWideLong from "./components/MovieCardWideLong";

export default function MainApp() {
  // let navbar = ["Home", Discover, Trending, Movies, TV Shows]

  return (
    <div>
      <div className="max-w-screen overflow-x-hidden">
        <div className="w-full absolute z-10	flex p-6 " id="Linear-Gradient">
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
        <FrontAutoPlay
          apilink={"https://api.themoviedb.org/3/movie/now_playing"}
        />
      </div>

      <div
        className="top-3/4 absolute  z-10 w-full bg-[#242424]"
        id="SecondGradient"
      >
        <div className="text-white text-3xl py-2 pt-32 px-8 font-bold text-start">
          Top Rated
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/movie/top_rated"}
        />
        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Just Released
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
        <MovieCardWideLong />

        <div className="flex border-t-4">
          <div className=" text-4xl w-1/2 justify-center">
            <div className="py-8 pl-16  text-justify">
              <div className="w-1/2">
                Our Platfrom is Trusted by Millions & Features Best Updated
                Movies all around the World.
              </div>
            </div>
            <div className="flex space-x-12 text-base justify-center pb-4">
              <div>Privacy Policy</div> <div>Terms of Service</div>
              <div>Language</div>
            </div>
          </div>
          <div className="text-2xl py-8 w-1/2 font-semibold text-zinc-400	self-center">
            Home / Discover / Influence / Release
          </div>
        </div>
      </div>
    </div>
  );
}

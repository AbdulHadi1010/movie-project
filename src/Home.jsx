import React from "react";
import MainPageNavigation from "./MainPageNavigation";
import MainPagePagination from "./MainPagePagination";
import MainPageAutoPlay from "./MainPageAutoPlay";
import "./MainApp.css";
import FrontAutoPlay from "./FrontAutoPlay";
import MovieCardWideLong from "./components/MovieCardWideLong";
import logo from "./assets/Website.png";

export default function MainApp() {
  return (
    <div>
      <FrontAutoPlay
        apilink={"https://api.themoviedb.org/3/movie/now_playing"}
      />
      <div
        className="top-3/4 absolute  z-10 w-full bg-[#242424]"
        id="SecondGradient"
      >
        <div className="text-white text-4xl pt-32 px-6 font-bold text-start">
          Top Rated
        </div>
        <div className="text-white text-3xl pt-16 px-8 font-bold text-start">
          Movies:
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/movie/top_rated"}
        />
        <div className="text-white text-3xl pt-16 px-8 font-bold text-start">
          TV Shows:
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/tv/top_rated"}
        />
        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Trending Movies:
        </div>
        <MainPageNavigation
          apilink={"https://api.themoviedb.org/3/trending/movie/week"}
        />
        <div className="text-white text-4xl  px-6 font-bold text-start">
          Discover
        </div>
        <div className="text-white text-3xl pt-16 px-8 font-bold text-start">
          Movies:
        </div>
        <MainPagePagination
          props={"https://api.themoviedb.org/3/discover/movie"}
        />
        <div className="text-white text-3xl pt-16 px-8 font-bold text-start">
          TV Shows:
        </div>
        <MainPagePagination
          props={"https://api.themoviedb.org/3/discover/tv"}
        />
        <div className="text-white text-3xl py-2 px-8 font-bold text-start">
          Trending TV Shows:
        </div>
        <MainPageNavigation
          apilink={"https://api.themoviedb.org/3/trending/tv/week"}
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

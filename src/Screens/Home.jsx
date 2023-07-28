import React from "react";
import MainPageNavigation from "../CustomPlayers/MainPageNavigation";
import MainPagePagination from "../CustomPlayers/MainPagePagination";
import MainPageAutoPlay from "../CustomPlayers/MainPageAutoPlay";
import FrontAutoPlay from "../CustomPlayers/FrontAutoPlay";
import MovieCardWideLong from "../components/MovieCardWideLong";

export default function Home() {
  return (
    <div>
      <FrontAutoPlay
        apilink={"https://api.themoviedb.org/3/movie/now_playing"}
      />
      <div className="z-10 w-full  bg-[#242424]">
        <div className="text-white text-xl md:text-2xl lg:text-4xl  lg:pt-16 md:pt-8 pt-4 px-6 font-bold text-start  ">
          Top Rated
        </div>
        <div className="text-white text-lg md:text-xl lg:text-2xl  lg:pt-16 md:pt-8 pt-4  px-8 font-bold text-start">
          Movies:
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/movie/top_rated"}
        />
        <div className="text-white text-lg md:text-xl lg:text-2xl   lg:pt-16 md:pt-8 pt-4  px-8 font-bold text-start">
          TV Shows:
        </div>
        <MainPageAutoPlay
          apilink={"https://api.themoviedb.org/3/tv/top_rated"}
        />
        <div className="text-white text-xl md:text-2xl lg:text-3xl py-2 px-8 font-bold text-start">
          Trending Movies:
        </div>
        <MainPageNavigation
          apilink={"https://api.themoviedb.org/3/trending/movie/week"}
        />
        <div className="text-white text-xl md:text-2xl lg:text-4xl  px-6 font-bold text-start">
          Discover
        </div>
        <div className="text-white text-lg md:text-xl lg:text-2xl  lg:pt-16 md:pt-8 pt-4  px-8 font-bold text-start">
          Movies:
        </div>
        <MainPagePagination
          props={"https://api.themoviedb.org/3/discover/movie"}
        />
        <div className="text-white text-lg md:text-xl lg:text-2xl  lg:pt-16 md:pt-8 pt-4  px-8 font-bold text-start">
          TV Shows:
        </div>
        <MainPagePagination
          props={"https://api.themoviedb.org/3/discover/tv"}
        />
        <div className="text-white text-xl md:text-2xl lg:text-3xl py-2 px-8 font-bold text-start">
          Trending TV Shows:
        </div>
        <MainPageNavigation
          apilink={"https://api.themoviedb.org/3/trending/tv/week"}
        />
        <MovieCardWideLong />
      </div>
    </div>
  );
}

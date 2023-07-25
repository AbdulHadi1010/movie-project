import React from "react";
import MainPageNavigation from "./MainPageNavigation";
import MainPagePagination from "./MainPagePagination";
import MainPageAutoPlay from "./MainPageAutoPlay";
import FrontAutoPlay from "./FrontAutoPlay";
import MovieCardWideLong from "./components/MovieCardWideLong";

export default function MainApp() {
  return (
    <div>
      <FrontAutoPlay
        apilink={"https://api.themoviedb.org/3/movie/now_playing"}
      />
      <div className="z-10 w-full  bg-[#242424]">
        <div className="text-white text-4xl pt-16 px-6 font-bold text-start">
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
      </div>
    </div>
  );
}

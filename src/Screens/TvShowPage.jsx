import React from "react";
import MainPageNavigation from "../CustomPlayers/MainPageNavigation";
import MainPagePagination from "../CustomPlayers/MainPagePagination";
import MainPageAutoPlay from "../CustomPlayers/MainPageAutoPlay";
export default function TvShowPage() {
  return (
    <div>
      <div className="text-white text-xl md:text-2xl lg:text-4xl pt-32 px-6 font-bold text-start">
        Airing Today
      </div>
      <MainPageAutoPlay
        apilink={"https://api.themoviedb.org/3/tv/airing_today"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl py-2 px-8 font-bold text-start">
        Trending
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/trending/tv/week"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl py-2 px-8 font-bold text-start">
        On The Air
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/tv/on_the_air"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl  px-6 font-bold text-start">
        Popular
      </div>
      <MainPagePagination props={"https://api.themoviedb.org/3/tv/popular"} />
      <div className="text-white text-xl md:text-2xl lg:text-4xl py-2 px-8 font-bold text-start">
        Top Rated
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/tv/top_rated"}
      />
    </div>
  );
}

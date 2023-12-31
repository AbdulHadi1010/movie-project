import React from "react";
import MainPageNavigation from "../CustomPlayers/MainPageNavigation";
import MainPagePagination from "../CustomPlayers/MainPagePagination";
import MainPageAutoPlay from "../CustomPlayers/MainPageAutoPlay";
export default function MoviePage() {
  return (
    <div>
      <div className="text-white text-xl md:text-2xl lg:text-4xl pt-32 px-6 font-bold text-start">
        Now Playing
      </div>
      <MainPageAutoPlay
        apilink={"https://api.themoviedb.org/3/movie/now_playing"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl  py-1 md:py-2 px-8 font-bold text-start">
        Trending
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/trending/movie/week"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl py-1 md:py-2 px-8 font-bold text-start">
        Upcoming
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/movie/upcoming"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl  px-6 font-bold text-start">
        Popular
      </div>
      <MainPagePagination
        props={"https://api.themoviedb.org/3/movie/popular"}
      />
      <div className="text-white text-xl md:text-2xl lg:text-4xl py-1 md:py-2 px-8 font-bold text-start">
        Top Rated
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/movie/top_rated"}
      />
    </div>
  );
}

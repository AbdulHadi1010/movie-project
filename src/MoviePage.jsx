import React from "react";
import MainPageNavigation from "./MainPageNavigation";
import MainPagePagination from "./MainPagePagination";
import MainPageAutoPlay from "./MainPageAutoPlay";
export default function MoviePage() {
  return (
    <div>
      <div className="text-white text-4xl pt-32 px-6 font-bold text-start">
        Now Playing
      </div>
      <MainPageAutoPlay
        apilink={"https://api.themoviedb.org/3/movie/now_playing"}
      />
      <div className="text-white text-3xl py-2 px-8 font-bold text-start">
        Trending
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/trending/movie/week"}
      />
      <div className="text-white text-3xl py-2 px-8 font-bold text-start">
        Upcoming
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/movie/upcoming"}
      />
      <div className="text-white text-4xl  px-6 font-bold text-start">
        Popular
      </div>
      <MainPagePagination
        props={"https://api.themoviedb.org/3/movie/popular"}
      />
      <div className="text-white text-3xl py-2 px-8 font-bold text-start">
        Top Rated
      </div>
      <MainPageNavigation
        apilink={"https://api.themoviedb.org/3/movie/top_rated"}
      />
    </div>
  );
}

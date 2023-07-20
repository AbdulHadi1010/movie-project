import React from "react";
import starImg from "../assets/star-image.png";
import { Swiper } from "swiper/react";
import "swiper/css/effect-coverflow";

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
export default function MovieCardWideLong() {
  const ImgLink = `https://image.tmdb.org/t/p/original`;
  const data = [
    {
      adult: false,
      backdrop_path: "/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg",
      genre_ids: [28, 53, 878],
      id: 577922,
      original_language: "en",
      original_title: "Tenet",
      overview:
        "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      popularity: 59.385,
      poster_path: "/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
      release_date: "2020-08-22",
      title: "Tenet",
      video: false,
      vote_average: 7.2,
      vote_count: 8450,
    },
    {
      adult: false,
      backdrop_path: "/llZSAx6YW0y9tV4iMKmbUBNh70I.jpg",
      genre_ids: [35, 12, 14],
      id: 346698,
      original_language: "en",
      original_title: "Barbie",
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      popularity: 1774.762,
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      release_date: "2023-07-19",
      title: "Barbie",
      video: false,
      vote_average: 8.3,
      vote_count: 62,
    },
    {
      adult: false,
      backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      genre_ids: [12, 18, 878],
      id: 157336,
      original_language: "en",
      original_title: "Interstellar",
      overview:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      popularity: 133.466,
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      release_date: "2014-11-05",
      title: "Interstellar",
      video: false,
      vote_average: 8.407,
      vote_count: 31861,
    },
    {
      adult: false,
      backdrop_path: "/9dZ52zOs91RMgjjORoMIi6VGNLr.jpg",
      genre_ids: [18, 36, 10752, 53],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      popularity: 579.146,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.5,
      vote_count: 24,
    },
  ];
  return (
    <Swiper
      slidesPerView={"auto"}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      // coverflowEffect={
      //   {
      //     // rotate: 50,
      //     // stretch: 0,
      //     // depth: 100,
      //   }
      // }
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      className="bg-black"
    >
      <div className="font-bold absolute z-10 text-4xl text-left pl-2 top-8">
        Featured By Website
      </div>
      {data.map((item) => {
        return (
          <SwiperSlide className="w-full p-32 relative rounded	">
            <div>
              <div className="opacity-70 block">
                <img
                  src={ImgLink + item.backdrop_path}
                  alt="Poster"
                  className="rounded"
                />
              </div>

              <div className="font-bold absolute text-4xl text-left py-4 pl-2 top-1/2">
                {item.title}
                <div className="font-semibold text-lg w-1/2 pt-4">
                  {item.overview}
                </div>
              </div>
              <div className="absolute w-1/5 top-1/4 left-2/3">
                <img
                  src={ImgLink + item.poster_path}
                  alt="Poster"
                  className=" rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

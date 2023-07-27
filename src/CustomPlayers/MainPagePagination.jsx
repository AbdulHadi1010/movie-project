import React, { useEffect, useState, useRef } from "react";
import MovieCardsWide from "../components/MovieCardsWide";
import axios from "axios";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Skeleton from "@mui/material/Skeleton";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export default function MainPagePagination(props) {
  const [Mdata, setMdata] = useState(null);
  const [isLoadiing, setisLoadiing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${props.props}?api_key=f2b8ce4dc465e56d96500a4e519cc3a7`,
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          setMdata(response.data.results);
          setTimeout(() => {
            setisLoadiing(true);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <div className="flex w-full">
        {isLoadiing
          ? Mdata.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MovieCardsWide props={item} />
                </SwiperSlide>
              );
            })
          : Array.from(new Array(5)).map((i) => (
              <div className="w-full">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="90%"
                  height={200}
                  sx={{
                    bgcolor: "grey.700",
                    m: "1rem",
                  }}
                  key={i}
                />
                <Skeleton
                  animation="wave"
                  width="90%"
                  height="7%"
                  sx={{
                    bgcolor: "grey.700",
                    m: "1rem",
                  }}
                />
                <Skeleton
                  animation="wave"
                  width="20%"
                  height="5%"
                  sx={{
                    bgcolor: "grey.700",
                    m: "1rem",
                  }}
                />
              </div>
            ))}
      </div>
    </Swiper>
  );
}

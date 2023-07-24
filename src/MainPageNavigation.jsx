import React, { useEffect, useState, useRef } from "react";
import MovieCardsWide from "./components/MovieCardsWide";
import axios from "axios";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MovieCardsLong from "./components/MovieCardsLong";

export default function MainPageNavigation(props) {
  const [Mdata, setMdata] = useState(null);
  const [isLoadiing, setisLoadiing] = useState(false);
  useEffect(() => {
    async function fetchData() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${props.apilink}?api_key=f2b8ce4dc465e56d96500a4e519cc3a7`,
        headers: {},
      };

      await axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          setMdata(response.data.results);
          setisLoadiing(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);
  return (
    <Swiper slidesPerView={5} navigation={true} modules={[Navigation]}>
      {isLoadiing &&
        Mdata.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MovieCardsLong props={item} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

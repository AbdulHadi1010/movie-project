import React, { useEffect, useState } from "react";
import MovieCards from "./components/MovieCards";
import axios from "axios";
export default function MainPage() {
  const [Mdata, setMdata] = useState(null);
  const [isLoadiing, setisLoadiing] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.themoviedb.org/3/discover/movie?api_key=f2b8ce4dc465e56d96500a4e519cc3a7",
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setMdata(response.data.results);
          setisLoadiing(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className=" grid grid-cols-4	gap-4">
      {isLoadiing &&
        Mdata.map((item) => {
          return <MovieCards props={item} key={item.id} />;
        })}
    </div>
  );
}

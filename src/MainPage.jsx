import React, { useEffect, useState } from "react";
import MovieCards from "./components/MovieCards";
import axios from "axios";
export default function MainPage(props) {
  const [Mdata, setMdata] = useState(null);
  const [isLoadiing, setisLoadiing] = useState(false);
  console.log(props);
  useEffect(() => {
    async function fetchData() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${props.props}?api_key=f2b8ce4dc465e56d96500a4e519cc3a7`,
        headers: {},
      };
      console.log(config.url);

      await axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
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
    <div className=" flex flex-nowrap w-screen gap-4 py-4">
      {isLoadiing &&
        Mdata.map((item) => {
          return <MovieCards props={item} key={item.id} />;
        })}
    </div>
  );
}

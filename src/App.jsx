import "./App.css";
import React from "react";
import logo from "./assets/Website.png";
import "./MainApp.css";
import Home from "./Home";
import MoviePage from "./MoviePage";
import TvShowPage from "./TvShowPage";
function App() {
  return (
    <div>
      <div className="max-w-screen overflow-x-hidden ">
        <div className="w-full absolute z-10	flex p-6 " id="Linear-Gradient">
          <img src={logo} alt="Logo" className="w-12" />
          <div className="text-white text-4xl px-8 font-semibold">
            CineFlicks
          </div>
          <div className="m-auto flex flex-1 max-w-full justify-end">
            <div className="flex justify-between">
              <div className="text-white text-2xl px-8 font-semibold">Home</div>
              <div className="text-white text-2xl px-8 font-semibold">
                Movies
              </div>
              <div className="text-white text-2xl px-8 font-semibold">
                TV Shows
              </div>
              <div className="text-white text-2xl px-8 font-semibold">
                About Us
              </div>
              <div className="text-white text-2xl px-8 font-semibold">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative" id="SecondGradient">
        {/* <Home /> */}
        {/* <MoviePage /> */}
        <TvShowPage />
      </div>
      <div className="flex pb-2 bottom-0 border-t-4 z-10">
        <div className=" text-4xl w-1/2 ">
          <div className="py-8 pl-16  text-justify">
            <div className="w-1/2">
              Our Platfrom is Trusted by Millions & Features Best Updated Movies
              all around the World.
            </div>
          </div>
          <div className="flex space-x-12 text-base justify-center pb-4">
            <div>Privacy Policy</div> <div>Terms of Service</div>
            <div>Language</div>
          </div>
        </div>
        <div className="text-2xl py-8 w-1/2 font-semibold text-zinc-400	self-center">
          Home / Discover / Influence / Release
        </div>
      </div>
    </div>
  );
}

export default App;

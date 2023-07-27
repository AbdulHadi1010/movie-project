import React from "react";
import logo from "../assets/Website.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="max-w-screen overflow-x-hidden ">
      <div className="w-full absolute z-10	flex p-6 " id="Linear-Gradient">
        <img src={logo} alt="Logo" className="w-12" />
        <div className="text-white text-4xl px-8 font-semibold">CineFlicks</div>
        <div className="m-auto flex flex-1 max-w-full justify-end">
          <div className="flex justify-between">
            <div className="text-white text-2xl px-8 font-semibold">
              <Link to="/"> Home</Link>
            </div>
            <div className="text-white text-2xl px-8 font-semibold">
              <Link to="/movies">Movies</Link>
            </div>
            <div className="text-white text-2xl px-8 font-semibold">
              <Link to="/tvshows">TV Shows</Link>
            </div>
            <div className="text-white text-2xl px-8 font-semibold">
              <Link to="/aboutus">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

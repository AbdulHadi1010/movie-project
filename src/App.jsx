import "./App.css";
import React from "react";
import logo from "./assets/Website.png";
import Home from "./Home";
function App() {
  return (
    <div>
      <div className="max-w-screen overflow-x-hidden">
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
      <Home />
    </div>
  );
}

export default App;

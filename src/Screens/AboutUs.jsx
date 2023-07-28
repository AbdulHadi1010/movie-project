import React from "react";
import Image from "../assets/aboutUsimg.png";
import LinkedIn from "../assets/linkedin.png";
import github from "../assets/github-sign.png";
import upwork from "../assets/upwork.png";
export default function AboutUs() {
  return (
    <div>
      <div className="pt-36 pl-2 md:pl-4 lg:pl-8 md:pt-16 lg:pt-32 text-left text-base md:text-xl lg:text-2xl ">
        ~ WHO WE ARE
      </div>
      <div className="md:flex ">
        <div className="w-full pl-2 sm:pt-4 lg:pl-8 md:pl-16 lg:p-32 text-left font-bold text-xl md:text-3xl lg:text-6xl">
          We Help To Get Solutions
          <div className="pt-4 md:pt-8 lg:pt-16 font-normal text-base md:text-xl lg:text-2xl ">
            With my expert React and React Native skills, I deliver exceptional
            user experiences and seamless cross-platform solutions. As a
            seasoned developer, I am passionate about creating innovative
            applications that captivate audiences. Let's collaborate to bring
            your ideas to life and unlock the full potential of your projects.
            Together, we can build cutting-edge solutions that meet your
            business needs and exceed your expectations.
          </div>
        </div>

        <div className="sm:p-8 md:p-16 lg:p-32">
          <img src={Image} className=" rounded-xl " />
        </div>
      </div>
      <div className="pt-4 md:pt-8 lg:p-16 text-xl md:text-xl lg:text-2xl font-bold">
        Follow The Links Below:
      </div>
      <div className="flex pt-4 md:pt-8 lg:p-16 justify-evenly pb-2">
        <div
          className="text-xs md:text-sm lg:text-base hover:cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/abdulhadi-reactjs-native-itsupport-specialist/"
            )
          }
        >
          <img src={LinkedIn} className="w-9 md:w-10 lg:w-12  rounded-md" />
          LinkedIn
        </div>
        <div
          className="text-xs md:text-sm lg:text-base hover:cursor-pointer"
          onClick={() =>
            window.open("https://github.com/AbdulHadi1010/AbdulHadi1010")
          }
        >
          <img src={github} className="w-9 md:w-10 lg:w-12 rounded-md " />
          GitHub
        </div>
      </div>
    </div>
  );
}

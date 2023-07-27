import React from "react";
import Image from "../assets/aboutUsimg.png";
import LinkedIn from "../assets/linkedin.png";
import github from "../assets/github-sign.png";
import upwork from "../assets/upwork.png";
export default function AboutUs() {
  return (
    <div>
      <div className="pt-40 pl-32 text-left text-2xl ">~ WHO WE ARE</div>
      <div className="flex  ">
        <div className="w-1/2 pt-8 pl-32 text-left text-6xl ">
          We Help To Get Solutions
          <div className="pt-16 text-left text-2xl">
            With my expert React and React Native skills, I deliver exceptional
            user experiences and seamless cross-platform solutions. As a
            seasoned developer, I am passionate about creating innovative
            applications that captivate audiences. Let's collaborate to bring
            your ideas to life and unlock the full potential of your projects.
            Together, we can build cutting-edge solutions that meet your
            business needs and exceed your expectations.
          </div>
          <div className="pt-16 text-4xl ">Follow The Links Below:</div>
          <div className="flex pt-16 justify-evenly">
            <div
              className="text-base hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abdulhadi-reactjs-native-itsupport-specialist/"
                )
              }
            >
              <img src={LinkedIn} className="w-12 rounded-md" />
              LinkedIn
            </div>
            <div
              className="text-base hover:cursor-pointer"
              onClick={() =>
                window.open("https://github.com/AbdulHadi1010/AbdulHadi1010")
              }
            >
              <img src={github} className="w-12 rounded-md" />
              GitHub
            </div>
            <div
              className="text-base hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.upwork.com/freelancers/~01e1fb6e9b521363f1?viewMode=1"
                )
              }
            >
              <img src={upwork} className="w-12 rounded-md" />
              UpWork
            </div>
          </div>
        </div>

        <div className="mx-32">
          <img src={Image} className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

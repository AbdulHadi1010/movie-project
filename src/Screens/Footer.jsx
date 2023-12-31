import React from "react";

export default function Footer() {
  return (
    <div className="flex pb-2 bottom-0 border-t-4 z-10">
      <div className=" text-sm md:text-base lg:text-xl w-1/2 ">
        <div className="py-8 pl-16  text-left">
          <div className="w-1/2">
            Our Platfrom is Trusted by Millions & Features Best Updated Movies
            all around the World.
          </div>
        </div>
        <div className="flex space-x-12 text-xs md:text-sm lg:text-base pl-16 pb-4">
          <div>Privacy Policy</div> <div>Terms of Service</div>
          <div>Language</div>
        </div>
      </div>
      <div className="text-xs md:text-sm lg:text-base py-8 w-1/2 font-semibold text-zinc-400	self-center">
        Home / Discover / Influence / Release
      </div>
    </div>
  );
}

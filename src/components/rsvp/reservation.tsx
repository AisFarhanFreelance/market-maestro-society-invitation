"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import WaveLine1 from "/public/assets/images/wave-line1.svg";

const Reservation = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 600);
  };

  return (
    <div className="relative flex min-h-[627px] flex-col justify-center">
      <div className="flex flex-col items-center justify-center space-y-2.5 px-4 text-center text-white">
        <div className="m-8 flex flex-col space-y-3 font-carrig">
          <div className="text-xl">JOIN</div>
          <div className="text-5xl">THE EVENT</div>
        </div>
        <div className="flex w-full items-center justify-center font-avenir">
          <Link href="/rsvp" onClick={handlePress}>
            <button
              className={`cursor-pointer rounded-full bg-[#F05625] px-7 py-3.5 leading-[94%] text-white uppercase transition-transform duration-150 ${
                isPressed
                  ? "scale-95 animate-pulse shadow-lg"
                  : "hover:scale-105 hover:bg-[#E04A1F] hover:shadow-xl"
              }`}
            >
              Reserve Your Position
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[20px] opacity-70">
        <Image src={WaveLine1} alt="Wave Line" />
      </div>
    </div>
  );
};

export default Reservation;

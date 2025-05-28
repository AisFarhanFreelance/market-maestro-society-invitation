"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import AnimatedElement from "../animation/animated-element";
import SyailendraLogo from "/public/assets/images/syailendra-logo2.svg";

const EventInvitation = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 600);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-contain bg-center text-center">
      <AnimatedElement delay={1}>
        <Image src={SyailendraLogo} alt="Syailendra Logo" className="mb-5" />
        <Link href="/main" onClick={handlePress}>
          <button
            className={`rounded-full bg-[#F05625] px-7 py-3.5 font-carrig leading-[94%] text-white uppercase transition-transform duration-150 ${
              isPressed
                ? "scale-95 animate-pulse shadow-lg"
                : "hover:scale-105 hover:bg-[#E04A1F] hover:shadow-xl"
            }`}
          >
            Open Invitation
          </button>
        </Link>
      </AnimatedElement>
    </div>
  );
};

export default EventInvitation;

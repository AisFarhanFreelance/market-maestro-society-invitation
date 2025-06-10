"use client";

import Image from "next/image";

import AnimatedElement from "../animation/animated-element";
import SyailendraLogo from "/public/assets/images/syailendra-logo2.svg";

const EventInvitation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-contain bg-center px-6 pt-32 text-center">
      <AnimatedElement delay={0.5} needScroll={false}>
        <div className="flex flex-col items-center space-y-32">
          <Image
            src={SyailendraLogo}
            alt="Syailendra Logo"
            className="mx-auto"
          />
          <div className="text-center">
            <div className="mb-[42px] font-carrig text-4xl tracking-[0.5rem] text-[#E5A155]">
              RSVP CLOSED
            </div>
            <div className="mx-auto max-w-xl text-center font-copperplate text-xs tracking-wider text-white uppercase">
              Due to the overwhelming enthusiasm and rapid response from the
              Market Maestros Society, our RSVP invitation is now officially
              closed.
              <br />
              <br />
              We’re truly grateful for the excitement and support, stay tuned
              for more exclusive opportunities ahead!
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default EventInvitation;

import Image from "next/image";

import Trumpet from "/public/assets/trumpet.svg";

const EventInvitation = () => {
  return (
    <div className="relative min-h-screen bg-invitation-night text-white">
      <Image
        src={Trumpet}
        alt="Trumpet"
        fill
        className="absolute inset-0 z-0"
        priority
      />

      <div className="absolute inset-0 bottom-[25%] z-10 flex flex-col items-center justify-center space-y-[45px] text-center">
        <div className="flex flex-col space-y-2.5">
          <div className="flex flex-col space-y-0.5 text-sm font-extrabold">
            <span>Ladies and Gentlemens</span>
            <span>You&apos;re Invited to</span>
          </div>
          <div className="text-xs font-bold capitalize">
            <span>Syailendra Networking Night</span>
          </div>
          <div className="text-sm font-extrabold uppercase">
            <span>The Market Maestro&apos;s Society</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2.5 text-xl font-bold">
          <span>
            June 14 <sup>th</sup>, 2025
          </span>
          <span>Gates Open at 5:30 pm</span>
        </div>
      </div>

      <div className="absolute bottom-[33%] z-10 flex w-full items-center justify-center">
        <button className="relative overflow-hidden rounded-full border-[1.15px] border-white/34 bg-invitation-night px-7 py-3.5 text-base font-normal uppercase">
          <Image
            src="/assets/button-background.svg"
            alt=""
            fill
            className="pointer-events-none absolute inset-0 z-0 object-cover"
          />
          <span className="relative z-10">OPEN INVITATION</span>
        </button>
      </div>
    </div>
  );
};

export default EventInvitation;

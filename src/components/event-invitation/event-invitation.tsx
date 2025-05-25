import Image from "next/image";

import SyailendraLogo from "/public/assets/images/syailendra-logo.svg";

const EventInvitation = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between bg-contain bg-center bg-no-repeat px-16 py-36 text-white"
      style={{ backgroundImage: 'url("/assets/images/diamond-border.svg")' }}
    >
      <Image
        src={SyailendraLogo}
        alt="SyailendraLogo"
        className="object-fill"
      />

      <div className="space-y-8">
        <div className="items-center text-center">
          <span className="flex flex-col font-amoresa text-sm font-light capitalize">
            Dear Valued Guest
            <span className="font-avenir normal-case">
              You&apos;re Invited to
            </span>
          </span>
        </div>
        <div className="items-center space-y-1.5 text-center">
          <div>
            <span className="flex flex-col font-amoresa text-4xl font-light capitalize">
              Syailendra
              <span className="font-tex-gyre-termes text-xl font-bold">
                Networking Night
              </span>
            </span>
          </div>
          <div>
            <span>THE MARKET MAESTRO&apos;S SOCIETY</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-1 text-center font-avenir">
          <span>
            June 14<sup>th</sup>, 2025
          </span>
          <span>Gates open at 5:30pm</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-white/50 to-white/20 p-[2px]">
          <button className="rounded-full bg-[#2d4163] px-8 py-2 font-kaisei text-base text-white uppercase transition hover:bg-[#3b4d70]">
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;

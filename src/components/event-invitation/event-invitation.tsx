import Image from "next/image";
import Link from "next/link";

import SyailendraLogo from "/public/assets/images/syailendra-logo.svg";

const EventInvitation = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[#2E4366] bg-contain bg-center bg-no-repeat px-16 py-36 text-white"
      style={{ backgroundImage: 'url("/assets/images/diamond-border.svg")' }}
    >
      <div className="space-y-20">
        <div className="space-y-12">
          <div className="">
            <div className="items-center text-center">
              <span className="font-roman flex flex-col font-avenir text-sm capitalize">
                Dear Valued Guest
                <span className="font-avenir text-sm font-light normal-case ">
                  You&apos;re Invited to
                </span>
              </span>
            </div>
            <div className="flex w-full flex-col items-center space-y-1.5 text-center">
              <div className="flex justify-center">
                <Image
                  src={SyailendraLogo}
                  alt="SyailendraLogo"
                  className="mx-auto"
                  // width={300}
                  height={105.9}
                />
              </div>
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
            <Link href="/main">
              <button className="rounded-full bg-[#2d4163] px-8 py-2 text-base text-white uppercase transition hover:bg-[#3b4d70]">
                Open Invitation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;

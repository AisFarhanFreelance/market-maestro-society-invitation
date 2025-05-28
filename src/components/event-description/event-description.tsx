import Image from "next/image";

import AnimatedElement from "../animation/animated-element";
import CAKLogo from "/public/assets/images/cak-investmen-club-logo-white1.svg";
import SyailendraLogo3 from "/public/assets/images/syailendra-logo3.svg";
import WaveLine1 from "/public/assets/images/wavey1.svg";

const EventDescription = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="mx-14 flex min-h-screen flex-col items-center justify-center text-center font-avenir text-sm text-white">
        <AnimatedElement needScroll={false}>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={SyailendraLogo3}
              alt="Syailendra Preferred Investment Partner"
            />
            <div className="font-light">In Collaboration With</div>
            <Image src={CAKLogo} alt="CAK Investment Club" />
          </div>
          <div className="mx-2.5 space-y-3">
            <div>Welcomes you to intimate night.</div>
            <div>
              Setting filled with insightful conversation, jazz-laced atmosphere
            </div>
            <div className="px-[12.5px]">
              A tribute to the thinkers, the builders,{" "}
              <b>the future market maestros</b>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <div className="relative bottom-[-100px]">
        <Image src={WaveLine1} alt="Wave Line Ornament" width={500} />
      </div>
    </div>
  );
};

export default EventDescription;

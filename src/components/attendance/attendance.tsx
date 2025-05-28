import Image from "next/image";

import AnimatedElement from "../animation/animated-element";
import BgDot1 from "/public/assets/images/bg-dot1.svg";
import BgDot2 from "/public/assets/images/bg-dot2.svg";
import GentlemanDress from "/public/assets/images/gentleman-dress.svg";
import WomanDresscode from "/public/assets/images/woman-dresscode.svg";

const Attendance = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex items-center justify-center text-center">
        <div className="m-14 inline-block space-y-4 text-white">
          <AnimatedElement>
            <div className="mb-8 font-unbounded text-2xl text-[#E5A155]">
              DRESSCODE
            </div>
          </AnimatedElement>
          <div className="space-y-3">
            <AnimatedElement>
              <div className="font-tex-gyre-termes uppercase italic">
                All White Attire
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="font-avenir text-sm">
                Think elegant evening meets modern professional, where style
                meets ambition in perfect balance.
              </div>
            </AnimatedElement>
          </div>
          <AnimatedElement>
            <div className="mb-12 flex flex-col space-y-2">
              <div className="flex flex-row justify-center space-x-6">
                <Image src={WomanDresscode} alt="Woman Dresscode" />
              </div>
              <span className="font-tex-gyre-termes text-xl italic">
                White Cocktail Dress
              </span>
            </div>
          </AnimatedElement>
          <AnimatedElement>
            <div className="space-y- flex flex-col px-5 font-tex-gyre-termes">
              <div className="flex flex-row justify-center space-x-6">
                <Image src={GentlemanDress} alt="Gentleman Dress" />
              </div>
              <div className="text-xl italic">White or Cream Formal Blazer</div>
              <div className="text-sm italic opacity-50">
                If white trousers are not available for men, khaki or beige
                alternatives are acceptable.
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <div className="absolute top-[180px] right-[0px]">
        <Image src={BgDot1} alt="Background Dot 1" width={77.4} height={159} />
      </div>
      <div className="absolute top-[500px] ">
        <Image src={BgDot2} alt="Background Dot 2" />
      </div>
    </div>
  );
};

export default Attendance;

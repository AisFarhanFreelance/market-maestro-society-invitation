import Image from "next/image";

import AnimatedElement from "../animation/animated-element";
import GentlemanDress1 from "/public/assets/images/gentleman-dress1.svg";
import ladiesDress1 from "/public/assets/images/ladies-dress1.svg";
import ladiesDress2 from "/public/assets/images/ladies-dress2.svg";

const Attendance = () => {
  return (
    <div
      className="mx-1 min-h-screen bg-[#2E4366] bg-contain bg-center bg-no-repeat px-6 py-28"
      style={{
        backgroundImage: 'url("/assets/images/attendance-border.svg")',
      }}
    >
      <div className="flex items-center justify-center text-center">
        <div className="m-8 inline-block from-[#CCA482] to-[#665241] p-[1px]">
          <div className="text-white">
            <AnimatedElement>
              <div className="mb-8 font-tex-gyre-termes text-3xl">
                Attendance
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="mb-12 flex flex-col font-avenir text-sm">
                <div className="mb-1 underline">By Invitation Only</div>
                <div>
                  Please inform committee if you are to bring a plus one
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="mb-12 flex flex-col space-y-2 text-sm">
                <div className="font-tex-gyre-termes">Dress Code</div>
                <div className="font-avenir underline">All White</div>
                <div className="font-avenir">
                  Think elegant evening meets modern professional, where style
                  meets ambition in perfect balance.
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="mb-12 flex flex-col space-y-2">
                <span className="font-amoresa text-3xl">Ladies</span>
                <span className="font-avenir text-sm">
                  White Cocktail Dress
                </span>
                <div className="flex flex-row justify-center space-x-6">
                  <Image src={ladiesDress1} alt="Ladies Dress 1" />
                  <Image src={ladiesDress2} alt="Ladies Dress 2" />
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="flex flex-col space-y-2">
                <span className="font-amoresa text-3xl">Gentleman</span>
                <span className="font-avenir text-sm">
                  White or Cream Formal Blazer
                </span>
                <div className="flex flex-row justify-center space-x-6">
                  <Image src={GentlemanDress1} alt="Gentleman Dress 1" />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

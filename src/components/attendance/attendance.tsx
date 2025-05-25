import Image from "next/image";

import GentlemanDress1 from "/public/assets/images/gentleman-dress1.svg";
import ladiesDress1 from "/public/assets/images/ladies-dress1.svg";
import ladiesDress2 from "/public/assets/images/ladies-dress2.svg";

const Attendance = () => {
  return (
    <div className="min-h-screen bg-[#2E4366]">
      <div className="m-8 flex items-center justify-center text-center">
        <div className="inline-block from-[#CCA482] to-[#665241] p-[1px]">
          <div className="border-2 border-solid border-white p-4 text-white">
            <div className="mb-8 font-tex-gyre-termes text-3xl">Attendance</div>
            <div className="mb-12 flex flex-col font-avenir text-sm">
              <div className="mb-1 underline">By Invitation Only</div>
              <div>Please inform committee if you are to bring a plus one</div>
            </div>
            <div className="mb-12 flex flex-col space-y-2 text-sm">
              <div className="font-tex-gyre-termes">Dress Code</div>
              <div className="font-avenir underline">All White</div>
              <div className="font-avenir">
                Think elegant evening meets modern professional, where style
                meets ambition in perfect balance.
              </div>
            </div>
            <div className="mb-12 flex flex-col space-y-2">
              <span className="font-amoresa text-3xl">Ladies</span>
              <span className="font-avenir text-sm">White Cocktail Dress</span>
              <div className="flex flex-row justify-center space-x-6">
                <Image src={ladiesDress1} alt="Ladies Dress 1" />
                <Image src={ladiesDress2} alt="Ladies Dress 2" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-amoresa text-3xl">Gentleman</span>
              <span className="font-avenir text-sm">
                White or Cream Formal Blazer
              </span>
              <div className="flex flex-row justify-center space-x-6">
                <Image src={GentlemanDress1} alt="Gentleman Dress 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

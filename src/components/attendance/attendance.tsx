import Image from "next/image";

import GentlemanDress1 from "/public/assets/gentleman-dress1.svg";
import ladiesDress1 from "/public/assets/ladies-dress1.svg";
import ladiesDress2 from "/public/assets/ladies-dress2.svg";

const Attendance = () => {
  return (
    <div className="min-h-screen bg-invitation-night text-white">
      <div className="m-8 flex items-center justify-center text-center">
        <div className="inline-block bg-gradient-to-bl from-[#CCA482] to-[#665241] p-[1px]">
          <div className="space-y-6 bg-invitation-night p-8 text-white">
            <div>
              <span className="text-2xl font-extrabold">Attendace</span>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <span className="font-extrabold capitalize underline">
                By Invitaion Only
              </span>
              <span className="opacity-80">
                Please inform committee if you are to bring a plus one
              </span>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <span className="font-extrabold capitalize">Dress Code</span>
              <span className="font-extrabold capitalize underline">
                All White
              </span>
              <span className="opacity-80">
                Think elegant evening meets modern professional, where style
                meets ambition in perfect balance.
              </span>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <span className="font-extrabold capitalize">Ladies</span>
              <span className="opacity-80">White Cocktail Dress</span>
              <div className="flex flex-row justify-center space-x-6">
                <Image src={ladiesDress1} alt="Ladies Dress 1" />
                <Image src={ladiesDress2} alt="Ladies Dress 2" />
              </div>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <span className="font-extrabold capitalize">Gentleman</span>
              <span className="opacity-80">White or Cream Formal Blazer</span>
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

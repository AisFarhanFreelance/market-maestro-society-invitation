import Image from "next/image";

import BarImage from "/public/assets/images/bar.svg";

const Rundown = () => {
  return (
    <div className="center flex min-h-screen bg-[#2E4366] text-white">
      <div className="flex flex-col items-center justify-between space-y-8">
        <div className="m-8 mt-[120px] space-y-12 p-8">
          <div className="flex flex-col text-center">
            <span
              className="font-amoresa text-[40px] capitalize"
              style={{ lineHeight: "111%" }}
            >
              The Evening&apos;s
            </span>
            <span className="font-avenir text-2xl font-light">Composition</span>
          </div>
          <div>
            <ul className="list-disc pl-6 text-left font-avenir text-sm opacity-80">
              <li>Strategic networking with fellow Market Maestros</li>
              <li>Premium refreshments in an intimate setting</li>
              <li>Insider perspectives on emerging opportunities</li>
            </ul>
          </div>
        </div>
        <div className="bottom-0 flex flex-1 items-end">
          <Image src={BarImage} alt="Bar Image" />
        </div>
      </div>
    </div>
  );
};

export default Rundown;

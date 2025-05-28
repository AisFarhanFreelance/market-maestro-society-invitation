import Image from "next/image";
import Link from "next/link";

import AnimatedElement from "../animation/animated-element";
import { Button } from "../ui/button";
import StringOrnament from "/public/assets/images/string-ornament.svg";
import WaveLine1 from "/public/assets/images/wavey1.svg";

const DateTime = () => {
  return (
    <div>
      <div className="relative flex min-h-screen w-full items-center justify-center px-12 text-white">
        <div className="z-50 flex w-full flex-col items-center justify-center text-center">
          <AnimatedElement>
            <h2 className="mb-3 font-carrig text-xl">DATE & TIME</h2>
          </AnimatedElement>
          <AnimatedElement>
            <div className="mb-3 text-sm">
              <div>
                <p>
                  Saturday, June 14<sup>th</sup>, 2025
                </p>
                <p>17:30 - 21:00 WIB</p>
              </div>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250614T103000Z%2F20250614T140000Z&details=Final%20Reminders%3A%0A%0A%F0%9F%93%8D%20Ashley%20Wahid%20Hasyim%20%0AJl.%20K.H.%20Wahid%20Hasyim%20No.73-75%2C%20Menteng%2C%20Jakarta%20Pusat%0A%0A%F0%9F%95%90%20Gates%20Open%3A%205%3A30%20PM%20WIB%20%0AArrive%20fashionably%20on%20time%2C%20the%20symphony%20begins%20promptly.%0A%0A%F0%9F%91%94%20Dress%20Code%3A%20All%20White%20Attire%2C%20%0ALadies%3A%20White%20cocktail%20dress%20Gentlemen%3A%20White%2Fcream%20formal%20blazer%0A%0ANote%3A%20If%20white%20trousers%20are%20not%20available%20for%20men%2C%20khaki%20or%20beige%20alternatives%20are%20acceptable.%20%0A%0AReady%20to%20compose%20your%20next%20chapter%3F%20%0ASee%20you%20there%2C%20Maestro.%0A%0ABest%20Regards%2C%20%0ASyailendra%20Capital&location=Ashley%20Wahid%20Hasyim&text=Syailendra%20Networking%20Night%20%3A%20The%20Market%20Maestros%20Night"
            >
              <Button className="mb-8 cursor-pointer rounded-full bg-white px-3.5 py-3 font-semibold text-[#F05625] italic">
                ADD TO CALENDAR
              </Button>
            </Link>
          </AnimatedElement>
          <AnimatedElement>
            <div className="">
              <h2 className="mb-3 font-carrig text-xl">LOCATION</h2>
              <div className="mb-3 font-avenir text-sm font-extrabold">
                Hotel Ashley Wahid Hasyim
              </div>
              <div className="mb-3 font-avenir text-sm">
                Jl. K.H. Wahid Hasyim No.73-75, RT.1/RW.4, Gondangdia, Kec.
                Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
              </div>
            </div>
          </AnimatedElement>
          <AnimatedElement>
            <div className="flex justify-center">
              <div className="">
                <Link
                  href="https://maps.app.goo.gl/3pULyHMA329inCPb9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mb-8 cursor-pointer rounded-full bg-white px-3.5 py-3 font-semibold text-[#F05625] italic">
                    OPEN LOCATION
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <div className="absolute top-52 -right-[220px] z-10 md:top-32 md:-right-[220px]">
          <Image
            src={StringOrnament}
            alt="String Ornament"
            width={350}
            height={50}
            className="object-cover "
          />
        </div>
      </div>
      <div className="relative top-[-100px]">
        <Image src={WaveLine1} alt="Wave Line Ornament" width={500} />
      </div>
    </div>
  );
};

export default DateTime;

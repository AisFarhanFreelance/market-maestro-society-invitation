import Image from "next/image";

import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import MusicPlayer from "@/components/music-player/music-player";
import Reservation from "@/components/rsvp/reservation";

import BgDot1 from "/public/assets/images/bg-dot1.svg";
import BgDot2 from "/public/assets/images/bg-dot2.svg";
import BgDotLowOpacity1 from "/public/assets/images/bg-dot-low-opacity1.svg";
import BiolaOrnament from "/public/assets/images/biola-ornament.svg";
import StringOrnament2 from "/public/assets/images/string-ornament2.svg";
import StringOrnament from "/public/assets/images/string-ornament.svg";
import WaveLine2 from "/public/assets/images/wavey2.svg";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center  bg-white">
        <div className="relative h-full w-full max-w-md overflow-hidden bg-[#0D254D]">
          <div className="absolute top-[-184px] left-[-217px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[673px] right-[-184px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[1542px] left-[-217px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[2399px] left-[-239px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />

          <div className="relative top-[800px]">
            <div className="absolute right-[-52.73px]">
              <Image src={StringOrnament} alt="String Ornament" />
            </div>
            <div className="absolute top-[90px] right-0">
              <Image src={BiolaOrnament} alt="Biola Ornament" />
            </div>
            <div className="absolute top-[150px] left-[-54px]">
              <Image src={StringOrnament2} alt="String Ornament 2" />
            </div>
          </div>

          <div className="absolute top-[0px] right-[0px]">
            <Image src={BgDotLowOpacity1} alt="Background Dot Low Opacity 1" />
          </div>
          <div className="absolute top-[0px] left-[0px]">
            <Image src={BgDotLowOpacity1} alt="Background Dot Low Opacity 1" />
          </div>
          <div className="absolute top-[2200px] right-[0px]">
            <Image
              src={BgDot1}
              alt="Background Dot 1"
              width={77.4}
              height={159}
            />
          </div>
          <div className="absolute top-[2580px] left-[-22px]">
            <Image src={BgDot2} alt="Background Dot 2" />
          </div>
          <div className="absolute top-[1700px] right-[0] bottom-0 h-[162.54px] w-full min-w-[476.28px]">
            <Image src={WaveLine2} alt="Wave Line Ornament" width={500} />
          </div>
          <div className="absolute top-[1300px] right-[-260px] bottom-0 h-[162.54px] w-full min-w-[476.28px]">
            <Image
              src={StringOrnament}
              alt="String Ornament"
              fill
              className="object-contain"
            />
          </div>

          <EventDescription />
          <DateTime />
          <Attendance />
          <Reservation />
          <MusicPlayer />
        </div>
      </div>
    </FadeInWrapper>
  );
}

import Image from "next/image";

import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import MusicPlayer from "@/components/music-player/music-player";
import Reservation from "@/components/rsvp/reservation";

import BgDot1 from "/public/assets/images/bg-dot1.svg";
import BgDot2 from "/public/assets/images/bg-dot2.svg";
import BiolaOrnament from "/public/assets/images/biola-ornament.svg";
import StringOrnament2 from "/public/assets/images/string-ornament2.svg";
import StringOrnament from "/public/assets/images/string-ornament.svg";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center  bg-white">
        <div className="relative h-full w-full max-w-sm overflow-hidden bg-[#0D254D]">
          <div className="absolute top-[-184px] left-[-217px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[673px] right-[-184px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[1542px] left-[-217px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[2399px] left-[-239px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />

          <div className="absolute top-[730px] bottom-0 left-[215px]">
            <Image src={StringOrnament} alt="String Ornament" />
          </div>
          <div className="absolute top-[820px] right-0 bottom-0">
            <Image src={BiolaOrnament} alt="Biola Ornament" />
          </div>
          <div className="absolute top-[880px] bottom-0 left-[-54px]">
            <Image src={StringOrnament2} alt="String Ornament 2" />
          </div>
          <div className="absolute top-[2685px] left-[313px]">
            <Image src={BgDot1} alt="Background Dot 1" />
          </div>
          <div className="absolute top-[2944px] left-[-22px]">
            <Image src={BgDot2} alt="Background Dot 2" />
          </div>
          <div className="absolute top-[2250px] right-[-110px] bottom-0">
            <Image src={StringOrnament} alt="String Ornament" />
          </div>

          <EventInvitation />
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

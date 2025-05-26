import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import MusicPlayer from "@/components/music-player/music-player";
import Reservation from "@/components/rsvp/reservation";
import Rundown from "@/components/rundown/rundown";

export default function Page() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-full w-full max-w-sm bg-[#2E4366]">
          <EventDescription />
          <DateTime />
          <Attendance />
          <Rundown />
          <Reservation />
        </div>
        <MusicPlayer />
      </div>
    </FadeInWrapper>
  );
}

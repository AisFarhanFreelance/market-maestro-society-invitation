import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import MusicPlayer from "@/components/music-player/music-player";
import Reservation from "@/components/rsvp/reservation";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-full w-full max-w-[390px] bg-[#0D254D]">
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

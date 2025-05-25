import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import MusicPlayer from "@/components/music-player/music-player";
import Reservation from "@/components/rsvp/reservation";
import Rundown from "@/components/rundown/rundown";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="min-h-screen bg-[#2E4366]">
        <EventInvitation />
        <EventDescription />
        <DateTime />
        <Attendance />
        <Rundown />
        <Reservation />
      </div>
      {/* <MusicPlayer /> */}
      <MusicPlayer />
    </FadeInWrapper>
  );
}

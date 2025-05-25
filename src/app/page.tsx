import FadeInWrapper from "@/components/animation/fade-in";
import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import MusicPlayer from "@/components/music-player/music-player";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="min-h-screen">
        <EventInvitation />
        <EventDescription />
        <DateTime />
        <Attendance />
      </div>
      {/* <MusicPlayer /> */}
      <MusicPlayer />
    </FadeInWrapper>
  );
}

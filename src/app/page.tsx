import FadeInWrapper from "@/components/animation/fade-in";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import MusicPlayer from "@/components/music-player/music-player";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="min-h-screen bg-[#2E4366] font-kaisei">
        <EventInvitation />
        <EventDescription />
      </div>
      {/* <MusicPlayer /> */}
      <MusicPlayer />
    </FadeInWrapper>
  );
}

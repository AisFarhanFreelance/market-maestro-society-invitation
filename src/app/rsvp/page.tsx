import FadeInWrapper from "@/components/animation/fade-in";
import MusicPlayer from "@/components/music-player/music-player";
import RsvpForm from "@/components/rsvp-form/rsvp-form";

const RSVP = () => {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-full w-full max-w-sm bg-[#0D254D]">
          <RsvpForm />
          <MusicPlayer />
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default RSVP;

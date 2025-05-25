import FadeInWrapper from "@/components/animation/fade-in";
import EventInvitation from "@/components/event-invitation/event-invitation";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-full w-full max-w-sm bg-[#2E4366]">
          <EventInvitation />
        </div>
      </div>
    </FadeInWrapper>
  );
}

import FadeInWrapper from "@/components/animation/fade-in";
import EventBlocker from "@/components/event-blocker/event-blocker";

// import EventInvitation from "@/components/event-invitation/event-invitation";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex min-h-screen items-center justify-center  bg-white">
        <div className="relative h-full w-full max-w-md overflow-hidden bg-[#0D254D]">
          <div className="absolute top-[-184px] left-[-217px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <div className="absolute top-[673px] right-[-184px] h-[368px] w-[368px] rounded-full bg-[#F05625] opacity-85 blur-[250px]" />
          <EventBlocker />
        </div>
      </div>
    </FadeInWrapper>
  );
}

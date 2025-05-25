import FadeInWrapper from "@/components/animation/fade-in";
import EventInvitation from "@/components/event-invitation/event-invitation";

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="min-h-screen bg-[#2E4366] font-kaisei">
        <EventInvitation />
      </div>
    </FadeInWrapper>
  );
}

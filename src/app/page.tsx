import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";

export default function Home() {
  return (
    <div className="min-h-screen font-kaisei">
      <EventInvitation />
      <EventDescription />
    </div>
  );
}

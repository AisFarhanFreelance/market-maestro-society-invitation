import Attendance from "@/components/attendance/attendance";
import DateTime from "@/components/date-time/date-time";
import EventDescription from "@/components/event-description/event-description";
import EventInvitation from "@/components/event-invitation/event-invitation";
import Reservation from "@/components/rsvp/reservation";
import Rundown from "@/components/rundown/rundown";

export default function Home() {
  return (
    <div className="min-h-screen bg-invitation-night font-kaisei">
      <EventInvitation />
      <EventDescription />
      <DateTime />
      <Attendance />
      <Rundown />
      <Reservation />
    </div>
  );
}

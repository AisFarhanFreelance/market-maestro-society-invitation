import RsvpForm from "@/components/rsvp-form/rsvp-form";

const RSVP = () => {
  return (
    <div
      className="relative min-h-screen bg-invitation-night text-[#2E4366]"
      style={{
        backgroundColor: "#2E4366",
        backgroundImage:
          "linear-gradient(to right, #586984, #586984 7.5px, #2E4366 7.5px, #2E4366)",
        backgroundSize: "15px 100%",
      }}
    >
      <RsvpForm />
    </div>
  );
};

export default RSVP;

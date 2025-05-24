import Image from "next/image";

import backgroundImage from "/public/assets/vintage_style_damask_pattern_background.svg";

const EventDescription = () => {
  return (
    <div className="relative min-h-screen bg-invitation-night text-white">
      <Image
        src={backgroundImage}
        alt="BackgroundImage"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
      />

      <div className="absolute">
        <div className="inline-block rounded-lg bg-gradient-to-bl from-[#B89678] via-[#5B3E26] to-[#FFFFFF] p-[1px]">
          <div className="rounded-lg bg-invitation-night px-6 py-3 text-white">
            Your content here
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;

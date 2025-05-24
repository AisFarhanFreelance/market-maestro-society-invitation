import Image from "next/image";

import backgroundImage from "/public/assets/vintage_style_damask_pattern_background.svg";

const EventDescription = () => {
  return (
    <div className="relative min-h-screen bg-invitation-night text-white">
      <Image
        src={backgroundImage}
        alt="Vintage damask pattern background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 m-8 flex items-center justify-center text-center">
        <div className="inline-block bg-gradient-to-bl from-[#B89678] via-[#5B3E26]/[0.34] to-[#FFFFFF] p-[1px]">
          <div className="space-y-2 bg-invitation-night p-8 text-white">
            <div>
              <span className="text-base font-extrabold">
                A Night of Strategic Networking
              </span>
            </div>
            <div className="flex flex-col space-y-8 text-sm">
              <span>
                Market Maestros come together for an evening where financial
                knowledge meets smart conversations. Where every discussion
                flows like music, and connections shape the future of smart
                investing.
              </span>
              <div className="flex flex-col space-y-1">
                <span className="uppercase">TRANSFORM YOUR NETWORKING</span>
                <span>
                  into a stage for breakthrough opportunities, where ambition
                  meets strategy in perfect harmony.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;

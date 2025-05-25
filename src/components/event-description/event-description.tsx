import AnimatedElement from "../animation/animated-element";

const EventDescription = () => {
  return (
    <div
      className="relative min-h-screen bg-invitation-night text-white"
      style={{
        backgroundColor: "#2E4366",
        backgroundImage:
          "linear-gradient(to right, #586984, #586984 7.5px, #2E4366 7.5px, #2E4366)",
        backgroundSize: "15px 100%",
      }}
    >
      <div className="absolute inset-0 m-8 flex items-center justify-center text-center">
        <div className="inline-block h-full bg-gradient-to-bl from-[#B89678] via-[#5B3E26]/[0.34] to-[#FFFFFF] p-[1px]">
          <div className="flex h-full flex-col justify-center space-y-2 bg-white p-8 align-middle text-[#2E4366]">
            <AnimatedElement>
              <div className="font-amoresa text-2xl">A Night of</div>
              <div className="font-tex-gyre-termes text-xl tracking-[0.5em]  uppercase">
                Strategic
              </div>
              <div className="font-tex-gyre-termes text-base ">Networking</div>
            </AnimatedElement>
            <div className="text-avenir flex flex-col space-y-8 text-sm">
              <AnimatedElement>
                Market Maestros come together for an evening where financial
                knowledge meets smart conversations. Where every discussion
                flows like music, and connections shape the future of smart
                investing.
              </AnimatedElement>
              <AnimatedElement>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold">Transform Your Networking</span>
                  <span>
                    into a stage for breakthrough opportunities, where ambition
                    meets strategy in perfect harmony.
                  </span>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;

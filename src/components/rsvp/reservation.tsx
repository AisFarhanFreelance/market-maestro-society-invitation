import Image from "next/image";

import Trumpet from "/public/assets/images/trumpet.svg";

const Reservation = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-4 text-white"
      style={{
        backgroundColor: "#2E4366",
        backgroundImage:
          "linear-gradient(to right, #586984, #586984 7.5px, #2E4366 7.5px, #2E4366)",
        backgroundSize: "15px 100%",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-full bg-gradient-to-b from-[#2E4366] to-transparent" />
      <Image
        src={Trumpet}
        alt="Trumpet"
        fill
        className="absolute inset-0 z-0"
        priority
      />

      <div className="absolute inset-0 bottom-[25%] z-10 mx-9 my-4 flex flex-col items-center justify-center text-center">
        <div className="m-8 flex flex-col">
          <div className="flex flex-col space-y-3">
            <div className="font-amoresa text-[32px]">Join the Society</div>
            <div className="flex flex-col space-y-8 font-avenir text-sm">
              <div>
                Limited seats await those ready to compose their next chapter.
              </div>
              <div>Your participation adds to the symphony of success.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[35%] z-10 flex w-full items-center justify-center">
        <button className="rounded-full bg-white px-7 py-3.5 leading-[94%] text-[#2E4366] uppercase">
          Reserve Your Position
        </button>
      </div>
    </div>
  );
};

export default Reservation;

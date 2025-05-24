import Image from "next/image";

import flowerImage from "/public/assets/flower.svg";

const Reservation = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-invitation-night text-white">
      <div className="flex min-h-screen items-center justify-center">
        <div className="m-8 w-full max-w-md justify-center space-y-6 border border-[#CCA482] bg-invitation-night p-8 text-center">
          <h2 className="text-2xl font-extrabold">Join the Society</h2>
          <div>
            <span>
              Limited seats await those ready to compose their next chapter.
              Your participation adds to the symphony of success.
            </span>
          </div>

          <button className="relative w-full overflow-hidden rounded-full border-[1.15px] border-white/34 bg-invitation-night py-3.5 text-base font-normal uppercase">
            <Image
              src="/assets/button-background.svg"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 z-0 object-cover"
            />
            <span className="relative z-10">Reserve Your Position</span>
          </button>
        </div>
      </div>

      <div className="absolute right-0 bottom-[-140px] left-[-80px] z-0 h-[427.39px] w-[564.28px]">
        <Image
          src={flowerImage}
          alt="Floral decoration"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </div>
  );
};

export default Reservation;

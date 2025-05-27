import Link from "next/link";

const Reservation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2.5 px-4 text-center text-white">
      <div className="m-8 flex flex-col space-y-3 font-carrig">
        <div className="text-xl">JOIN</div>
        <div className="text-5xl">THE EVENT</div>
      </div>
      <div className="flex w-full items-center justify-center font-avenir">
        <Link href="/rsvp">
          <button className="rounded-full bg-[#F05625] px-7 py-3.5 leading-[94%] text-white uppercase">
            Reserve Your Position
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;

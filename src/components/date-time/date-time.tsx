import Link from "next/link";

const DateTime = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-invitation-night px-4 text-white"
      style={{
        backgroundColor: "#2E4366",
        backgroundImage:
          "linear-gradient(to right, #586984, #586984 7.5px, #2E4366 7.5px, #2E4366)",
        backgroundSize: "15px 100%",
      }}
    >
      <div
        className="relative flex aspect-[3/5] w-full max-w-md items-center justify-center bg-cover bg-center bg-no-repeat p-10 text-black"
        style={{
          backgroundImage: 'url("/assets/images/venue-element.svg")',
          backgroundSize: "100% auto",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-2xl font-extrabold capitalize">
            Event Particulars
          </h2>
          <div className="space-y-2 text-sm">
            <div className="font-extrabold">Date & Time</div>
            <div>
              <p>
                Saturday, June 14<sup>th</sup>, 2025
              </p>
              <p>17:30 - 21:00 WIB</p>
            </div>
          </div>
          <div className="space-y-2 text-sm capitalize">
            <div className="font-extrabold">Venue</div>
            <div className="font-extrabold opacity-80">Ashley Wahid Hasyim</div>
            <div className="text-sm leading-relaxed">
              Jl. K.H. Wahid Hasyim No.73-75, RT.1/RW.4, Gondangdia, Kec.
              Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-[#2E4366]/60 to-[#2e4366]/34 p-[2px]">
              <Link
                href="https://maps.app.goo.gl/mVSDRzJDHfd1vCmQA"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-white px-8 py-2 text-center font-kaisei text-base text-[#2E4366] uppercase transition"
              >
                View Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;

import Link from "next/link";

const DateTime = () => {
  return (
    <div className="relative min-h-screen bg-invitation-night text-white">
      {/* <Image
        src={backgroundImage}
        alt="Vintage damask pattern background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-15 bg-repeat"
        priority
      /> */}
      <div className="absolute inset-0 m-8 flex items-center justify-center text-center">
        <div className="inline-block bg-gradient-to-bl from-[#CCA482] to-[#5B4231] p-[1px]">
          <div className="space-y-6 bg-invitation-night p-8 text-white">
            <div className="text-2xl font-extrabold capitalize">
              Event Particulars
            </div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <span className="font-extrabold">Date & Time</span>
              <div className="flex flex-col space-y-1">
                <span>
                  Saturday, June 14 <sup>th</sup>, 2025
                </span>
                <span>17:30 - 21:00 WIB</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm capitalize">
              <span className="font-extrabold">Venue</span>
              <span className="font-extrabold opacity-80">
                Ashley Wahid Hasyim
              </span>
              <span>
                Jl. K.H. Wahid Hasyim No.73-75, RT.1/RW.4, Gondangdia, Kec.
                Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
              </span>
            </div>

            <Link
              href="https://maps.app.goo.gl/mVSDRzJDHfd1vCmQA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white bg-transparent px-7 py-3.5 text-center text-white uppercase transition hover:bg-white hover:text-invitation-night"
            >
              View Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;

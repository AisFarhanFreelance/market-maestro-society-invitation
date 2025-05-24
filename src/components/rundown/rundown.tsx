const Rundown = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-invitation-night text-white">
      <div className="flex items-center justify-center">
        <div className="m-8 space-y-6 border border-[#CCA482] bg-invitation-night p-8">
          <div>
            <span className="text-2xl font-extrabold capitalize">
              The Evening&apos;s Composition
            </span>
          </div>
          <div>
            <ul className="list-disc space-y-4 pl-6 text-left text-sm opacity-80">
              <li>Strategic networking with fellow Market Maestros</li>
              <li>Premium refreshments in an intimate setting</li>
              <li>Insider perspectives on emerging opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rundown;

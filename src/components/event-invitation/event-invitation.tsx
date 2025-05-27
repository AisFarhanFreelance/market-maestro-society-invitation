import Image from "next/image";

import SyailendraLogo from "/public/assets/images/syailendra-logo2.svg";

const EventInvitation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-contain bg-center">
      <Image src={SyailendraLogo} alt="Syailendra Logo" />
    </div>
  );
};

export default EventInvitation;

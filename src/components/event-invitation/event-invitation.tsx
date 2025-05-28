import Image from "next/image";

import AnimatedElement from "../animation/animated-element";
import SyailendraLogo from "/public/assets/images/syailendra-logo2.svg";

const EventInvitation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-contain bg-center">
      <AnimatedElement delay={1}>
        <Image src={SyailendraLogo} alt="Syailendra Logo" />
      </AnimatedElement>
    </div>
  );
};

export default EventInvitation;

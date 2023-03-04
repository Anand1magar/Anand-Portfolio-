import type { NextPage } from "next";
import TechnologiesSection from "../components/technologies-section";
import FollowUsContainer from "../components/follow-us-container";
import MobileSection from "../components/mobile-section";
import FrontEndTechSection from "../components/front-end-tech-section";
import MobileContent from "../components/mobile-content";

const FrameComponent: NextPage = () => {
  return (
    <div className="relative w-full h-[3369px] flex flex-col items-center justify-start md:pl-px md:box-border">
      <TechnologiesSection />
      <FollowUsContainer />
      <MobileSection />
      <FrontEndTechSection />
      <MobileContent />
    </div>
  );
};

export default FrameComponent;

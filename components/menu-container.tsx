import type { NextPage } from "next";
import EntranceMenuDiv from "../components/entrance-menu-div";

const MenuContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-white-200 flex flex-col p-[100px] items-center justify-center text-center text-2xs text-darkslategray-200 font-josefin-sans">
      <div className="flex flex-col items-center justify-center gap-[50px] max-w-[1240px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
          <div className="relative box-border w-[77.11px] h-[29.5px] shrink-0 border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
            <div className="absolute top-[9px] left-[calc(50%_-_38.55px)] tracking-[3px] leading-[22.5px] uppercase font-medium flex items-center justify-center w-[77.31px] h-[15px]">
              MENU
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-4xl font-cormorant-infant">
            <b className="relative tracking-[0.2px] leading-[56px] capitalize inline-block w-[277px] h-[47.12px] shrink-0">
              Our Menu
            </b>
            <div className="self-stretch relative text-base tracking-[0.2px] leading-[30px] font-josefin-sans text-dimgray-300">
              There is a game between the waiters in restaurant to see who
              serves the food to each table fastest. That led to attempting the
              Guinness Record.
            </div>
          </div>
        </div>
        <EntranceMenuDiv
          carouselImageUrls="../image-div@2x.png"
          carouselImageUrls2="../image-div1@2x.png"
          carouselImageUrls3="../image-div1@2x.png"
          carouselImageUrls4="../image-div1@2x.png"
        />
        <EntranceMenuDiv
          carouselImageUrls="../image-div4@2x.png"
          carouselImageUrls2="../image-div5@2x.png"
          carouselImageUrls3="../image-div5@2x.png"
          carouselImageUrls4="../image-div5@2x.png"
        />
        <button className="cursor-pointer py-5 pr-[56.34375px] pl-[57px] bg-[transparent] flex flex-row items-center justify-center border-[2px] border-solid border-burlywood-100 hover:bg-burlywood-300">
          <div className="relative text-lg tracking-[0.2px] leading-[33px] font-medium font-josefin-sans text-burlywood-100 text-center">
            See all menu
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuContainer;

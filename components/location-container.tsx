import type { NextPage } from "next";

const LocationContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-snow flex flex-row py-[45px] px-[100px] items-center justify-center text-left text-xl text-darkslategray-200 font-cormorant-infant md:items-center md:justify-start">
      <div className="flex flex-row items-start justify-start gap-[76px] max-w-[1240px] md:flex-col md:[row-gap:30px]">
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <div className="relative w-[67px] h-[68px] shrink-0">
            <div className="absolute top-[calc(50%_-_34px)] left-[0px] rounded-xxl bg-darkslategray-200 w-[67px] h-[68px]">
              <div className="absolute top-[calc(50%_-_18.72px)] left-[calc(50%_-_18.37px)] flex flex-row items-start justify-start">
                <img
                  className="relative w-[37.44px] h-[37.44px] shrink-0 overflow-hidden"
                  alt=""
                  src="../6229b772cb568e7b96d20e2d-detailicon1svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-0 pr-[0.09375px] pl-0 items-start justify-start gap-[1px]">
            <b className="relative tracking-[0.2px] leading-[39px]">
              Locate Us
            </b>
            <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-dimgray-300">
              Riverside 25, San Diego, California
            </div>
          </div>
        </div>
        <div className="flex flex-row py-0 pr-2.5 pl-0 items-center justify-start gap-[20px]">
          <div className="relative w-[65px] h-[65px] shrink-0">
            <div className="absolute top-[calc(50%_-_32.5px)] left-[0px] rounded-xxl bg-darkslategray-200 w-[65px] h-[65px]">
              <div className="absolute top-[calc(50%_-_15.43px)] left-[calc(50%_-_15.09px)] flex flex-row items-start justify-start">
                <img
                  className="relative w-[30.87px] h-[30.87px] shrink-0 overflow-hidden"
                  alt=""
                  src="../6229b8c45ca27b60baad8342-detailicon2svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-0 pr-[0.171875px] pl-0 items-start justify-start gap-[1px]">
            <b className="relative tracking-[0.2px] leading-[39px]">
              Open Hours
            </b>
            <div className="relative text-xs tracking-[0.2px] leading-[30px] font-josefin-sans text-dimgray-300">
              Mon To Fri 9:00 AM - 9:00 PM
            </div>
          </div>
        </div>
        <div className="flex flex-row py-0 pr-2.5 pl-[0.0001250000059371814px] items-center justify-start gap-[20px]">
          <div className="relative w-[68px] h-[68px] shrink-0">
            <div className="absolute top-[calc(50%_-_34px)] left-[0px] rounded-xxl bg-darkslategray-200 w-[68px] h-[68px]">
              <div className="absolute top-[calc(50%_-_16.41px)] left-[calc(50%_-_16.06px)] flex flex-row items-start justify-start">
                <img
                  className="relative w-[32.83px] h-[32.83px] shrink-0 overflow-hidden"
                  alt=""
                  src="../6229b8cd53997e91fce1dc76-detailicon3svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <b className="relative tracking-[0.2px] leading-[39px]">
              Reservation
            </b>
            <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-dimgray-300">
              restaurantate@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;

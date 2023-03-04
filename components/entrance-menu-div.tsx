import type { NextPage } from "next";

type EntranceMenuDivType = {
  carouselImageUrls?: string;
  carouselImageUrls2?: string;
  carouselImageUrls3?: string;
  carouselImageUrls4?: string;
};

const EntranceMenuDiv: NextPage<EntranceMenuDivType> = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  carouselImageUrls4,
}) => {
  return (
    <div className="flex flex-row items-center justify-center text-left text-2xl text-darkslategray-200 font-cormorant-infant md:flex-col">
      <div className="flex flex-row items-center justify-center gap-[20px] sm:flex-col">
        <div className="w-[295px] shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={carouselImageUrls}
          />
          <div className="self-stretch flex flex-col py-3 px-0 items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[5px]">
              <b className="relative tracking-[0.2px] leading-[42px]">
                Entrance
              </b>
              <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-burlywood-100">
                View details
              </div>
            </div>
          </div>
        </div>
        <div className="w-[295px] shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={carouselImageUrls2}
          />
          <div className="self-stretch flex flex-col py-3 px-0 items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[5px]">
              <b className="relative tracking-[0.2px] leading-[42px]">
                Entrance
              </b>
              <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-burlywood-100">
                View details
              </div>
            </div>
          </div>
        </div>
        <div className="w-[295px] shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={carouselImageUrls3}
          />
          <div className="self-stretch flex flex-col py-3 px-0 items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[5px]">
              <b className="relative tracking-[0.2px] leading-[42px]">
                Entrance
              </b>
              <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-burlywood-100">
                View details
              </div>
            </div>
          </div>
        </div>
        <div className="w-[295px] shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={carouselImageUrls4}
          />
          <div className="self-stretch flex flex-col py-3 px-0 items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[5px]">
              <b className="relative tracking-[0.2px] leading-[42px]">
                Entrance
              </b>
              <div className="relative text-sm tracking-[0.2px] leading-[30px] font-josefin-sans text-burlywood-100">
                View details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntranceMenuDiv;

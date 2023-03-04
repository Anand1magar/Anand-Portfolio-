import type { NextPage } from "next";

const AddressContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-white-200 h-[619px] shrink-0 flex flex-row p-[100px] box-border items-center justify-center text-left text-4xl text-darkslategray-200 font-cormorant-infant">
      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[150px] max-w-[1240px] md:flex-col">
        <div className="w-[449px] shrink-0 flex flex-col items-start justify-start gap-[71px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
            <b className="self-stretch relative tracking-[0.2px] leading-[56px] capitalize">{`Address & Opening time`}</b>
            <div className="self-stretch relative text-base tracking-[0.2px] leading-[30px] font-josefin-sans text-burlywood-100">
              4140 Parker Rd. Allentown, New Mexico 31134
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[28px] text-sm text-hytenocolor-text1 font-inter">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <div className="relative tracking-[0.48px] leading-[26.36px] font-medium">
                  <span>SUNDAY - FRIDAY</span>
                  <span className="text-black"> :</span>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-black">
                  <div className="relative tracking-[0.48px] leading-[26.36px] font-semibold">
                    6:30 PM - 11:00 PM
                  </div>
                  <div className="relative text-xs tracking-[0.48px] leading-[26.36px] text-gray-21">
                    11H 30M - 15H
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative tracking-[0.48px] leading-[26.36px] font-medium flex items-center w-[184.41px] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <span>{` SATURDAY   `}</span>
                    <span className="text-black"> :</span>
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-black">
                  <div className="relative tracking-[0.48px] leading-[26.36px] font-semibold">
                    6:30 PM - 11:00 PM
                  </div>
                  <div className="relative text-xs tracking-[0.48px] leading-[26.36px] text-gray-21">
                    11H 30M - 15H
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-start md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex-1 relative">
            <img
              className="absolute top-[0px] left-[0px] w-[641px] h-[419px] object-cover"
              alt=""
              src="../rectangle-6021@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;

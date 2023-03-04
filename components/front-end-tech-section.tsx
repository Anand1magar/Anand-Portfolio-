import type { NextPage } from "next";

const FrontEndTechSection: NextPage = () => {
  return (
    <div className="self-stretch bg-white-200 overflow-hidden flex flex-col py-[100px] px-[165px] items-start justify-start text-left text-base text-hytenocolor-primary-button1 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-between lg:flex-col lg:pb-[50px] lg:box-border">
        <div className="flex flex-col pt-0 px-0 pb-[50px] items-start justify-center gap-[30px]">
          <div className="flex flex-row items-start justify-start gap-[36px] lg:[row-gap:10]">
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <img
                    className="relative w-[59.11px] h-[12.12px] shrink-0"
                    alt=""
                    src="../vector1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[36px]">
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon2.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon3.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon4.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="relative w-[60px] h-[60px] shrink-0 overflow-hidden"
                  alt=""
                  src="../front-end-tech--icon5.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-xxs bg-white-200 box-border w-[122px] h-[122px] shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro">
                  <div className="w-[60px] h-[60px] shrink-0 flex flex-col p-3 box-border items-center justify-center">
                    <img
                      className="relative w-[41.2px] h-[24.57px] shrink-0"
                      alt=""
                      src="../vector2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
            <div className="relative tracking-[0.15em] inline-block w-[377px]">
              FRONT END
            </div>
            <div className="relative text-6xl font-semibold text-hytenocolor-dark1">
              Front End Tech
            </div>
          </div>
          <div className="relative text-hytenocolor-text1 inline-block w-[455px]">
            Now a days mobile technology has become an essential part of modern
            life, enabling people to stay connected and productive while on the
            go.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndTechSection;

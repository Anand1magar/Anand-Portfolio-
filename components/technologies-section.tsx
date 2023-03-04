import type { NextPage } from "next";

const TechnologiesSection: NextPage = () => {
  return (
    <section className="self-stretch bg-white-200 overflow-hidden flex flex-col pt-[172px] px-[165px] pb-[100px] items-start justify-start text-left text-5xl text-hytenocolor-dark1 font-poppins lg:pl-[100px] lg:pr-[100px] lg:box-border">
      <div className="self-stretch flex flex-row items-start justify-start gap-[34px] md:flex-col">
        <div className="flex-1 flex flex-col items-start justify-start gap-[60px] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px]">
            <div className="flex flex-col items-start justify-start gap-[40px]">
              <div className="w-[538px] flex flex-col items-start justify-start">
                <div className="w-[587px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[62px]">
                      <span>Technologies</span>
                      <span className="font-semibold"> We Offer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[538px] flex flex-col items-start justify-start text-base text-hytenocolor-text1">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[39px]">
                    <span>
                      We are helping you to bringing Your Vision to Life with
                      the Latest Technologies"
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[25px] text-sm text-white-200">
              <div className="flex flex-row items-center justify-start">
                <div className="rounded-large [background:linear-gradient(90.8deg,_#0502bc,_#8c55f3)] shadow-[0px_4px_17px_rgba(5,_2,_188,_0.33)] h-[59px] flex flex-row py-3 px-10 box-border items-center justify-center gap-[12px]">
                  <div className="relative font-medium">Contact Us</div>
                  <img
                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                    alt=""
                    src="../arrowrightline.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-hytenocolor-primary-button1">
                <div className="rounded-large shadow-[0px_4px_17px_rgba(5,_2,_188,_0.33)] box-border h-[59px] flex flex-row py-3 px-10 items-center justify-center gap-[12px] border-[1px] border-solid border-hytenocolor-primary-button1">
                  <img
                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                    alt=""
                    src="../heroiconscurrencydollar.svg"
                  />
                  <div className="relative font-medium">Estimate your cost</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[55px] text-xs text-gray-21">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-center justify-start gap-[21px]">
                <img
                  className="relative w-[65px] h-[65px] shrink-0 object-cover"
                  alt=""
                  src="../ellipse-1@2x.png"
                />
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <img
                    className="relative w-[5px] h-[5px] shrink-0"
                    alt=""
                    src="../ellipse-2.svg"
                  />
                  <img
                    className="relative w-[5px] h-[5px] shrink-0"
                    alt=""
                    src="../ellipse-3.svg"
                  />
                  <img
                    className="relative w-[5px] h-[5px] shrink-0"
                    alt=""
                    src="../ellipse-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-md bg-ghostwhite w-[300px] shrink-0 flex flex-col py-1.5 px-6 box-border items-center justify-start">
              <div className="self-stretch relative leading-[31px] font-semibold">
                It has saved me countless hours and has made my job much easier.
              </div>
              <div className="self-stretch relative text-3xs leading-[31px] text-gray-41 flex items-center h-7 shrink-0">
                Wade Warren
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative rounded-base w-[478.13px] h-[538.83px] shrink-0 object-cover md:w-full"
          alt=""
          src="../rectangle-15@2x.png"
        />
      </div>
    </section>
  );
};

export default TechnologiesSection;

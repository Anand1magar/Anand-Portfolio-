import type { NextPage } from "next";

const MobileContent: NextPage = () => {
  return (
    <div className="self-stretch bg-hytenocolor-accent1 overflow-hidden flex flex-col py-[100px] px-[165px] items-start justify-center text-left text-base text-hytenocolor-primary-button1 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="w-[545px] shrink-0 flex flex-col items-center justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
            <div className="relative tracking-[0.15em] inline-block w-[377px]">
              MOBILE
            </div>
            <div className="relative text-6xl font-semibold text-hytenocolor-dark1">
              Back End Tech
            </div>
          </div>
          <div className="self-stretch relative text-hytenocolor-text1">
            Now a days mobile technology has become an essential part of modern
            life, enabling people to stay connected and productive while on the
            go.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px] text-3xl text-black">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-2xxs bg-white-200 w-[466px] flex flex-col py-[29px] px-[50px] box-border items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <img
                    className="relative w-[88px] h-[53.89px] shrink-0"
                    alt=""
                    src="../group-10118.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-medium">Node Js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-2xxs bg-white-200 w-[466px] flex flex-col py-[29px] px-[50px] box-border items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[59px] h-[59px] shrink-0 overflow-hidden"
                    alt=""
                    src="../vscodeiconsfiletypenestjs.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-medium">Nest Js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContent;

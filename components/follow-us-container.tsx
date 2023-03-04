import type { NextPage } from "next";

const FollowUsContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-white-200 overflow-hidden flex flex-col py-[100px] px-[165px] items-center justify-center text-left text-xs text-hytenocolor-subtitle1 font-poppins">
      <div className="w-[1102px] flex flex-row py-0 pr-[81px] pl-0 box-border items-center justify-between">
        <div className="flex flex-col items-center justify-start relative">
          <div className="my-0 mx-[!important] absolute top-[0px] left-[-0.14px] flex flex-col items-center justify-start gap-[12px] z-[0]">
            <div className="relative tracking-[0.04em] font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">
              Follow Us
            </div>
            <div className="relative box-border w-px h-[30px] shrink-0 border-r-[1px] border-solid border-hytenocolor-subtitle1" />
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <img
                className="relative w-5 h-5 shrink-0 overflow-hidden"
                alt=""
                src="../facebookfill.svg"
              />
              <img
                className="relative w-5 h-5 shrink-0 overflow-hidden"
                alt=""
                src="../linkedinfill.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[36px] text-5xl text-hytenocolor-dark1 font-work-sans">
          <div className="self-stretch flex flex-col items-center justify-center md:flex-col">
            <div className="self-stretch flex flex-row items-center justify-center gap-[14px]">
              <div className="relative tracking-[-0.02em] leading-[62px] font-semibold">
                Also mentioned by these
              </div>
              <div className="relative tracking-[-0.02em] leading-[62px] font-semibold [background:linear-gradient(90.8deg,_#0502bc,_#8c55f3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                magazines
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[50px] flex-wrap md:flex-col">
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-3585@2x.png"
            />
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-50@2x.png"
            />
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-3587@2x.png"
            />
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-3586@2x.png"
            />
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-3589@2x.png"
            />
            <img
              className="relative w-[104.48px] h-[89px] shrink-0 object-cover"
              alt=""
              src="../image-3588@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsContainer;

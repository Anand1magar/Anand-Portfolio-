import type { NextPage } from "next";

const GeoLocationContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-200 flex flex-col pt-[100px] px-[100px] pb-0 items-center justify-center gap-[40px] text-left text-2xs text-white-200 font-josefin-sans">
      <div className="self-stretch flex flex-row items-start justify-between max-w-[1240px] md:flex-col md:gap-[100px] md:items-start md:justify-center">
        <div className="flex flex-col pt-[9px] px-0 pb-[15px] items-start justify-start gap-[30px] text-white-100">
          <div className="relative box-border w-[93.8px] h-8 shrink-0 border-t-[1px] border-solid border-burlywood-200 border-b-[1px]">
            <div className="absolute top-[10px] left-[0.35px] tracking-[3px] leading-[21px] uppercase font-medium flex items-center w-[94px] h-[15px]">
              Contact
            </div>
          </div>
          <div className="flex flex-col py-0 pr-[123px] pl-0 items-start justify-start text-base text-burlywood-200">
            <div className="relative tracking-[0.2px] leading-[30px] text-white-100">
              5 Rue Dalou, 75015 Paris
            </div>
            <div className="relative tracking-[0.2px] leading-[30px]">
              +123 456 789
            </div>
            <div className="relative tracking-[0.2px] leading-[30px]">
              email321@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px] text-center">
          <div className="flex flex-row py-[7px] px-0 items-start justify-start border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
            <div className="relative tracking-[3px] uppercase font-medium inline-block w-[172px] h-[13.66px] shrink-0">
              Quick links
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px] text-left text-base">
            <div className="relative tracking-[0.2px] leading-[30px]">
              WELCOME
            </div>
            <div className="relative tracking-[0.2px] leading-[30px]">MENU</div>
            <div className="relative tracking-[0.2px] leading-[30px]">
              DELIVERY
            </div>
            <div className="relative tracking-[0.2px] leading-[30px]">
              RESERVATION
            </div>
            <div className="relative tracking-[0.2px] leading-[30px]">
              GALLERY
            </div>
          </div>
        </div>
        <div className="w-[259px] shrink-0 flex flex-col pt-[8.609375px] px-0 pb-[0.390625px] box-border items-start justify-center gap-[30px] text-right">
          <div className="relative box-border w-[174.17px] h-8 shrink-0 border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
            <div className="absolute top-[20.91px] right-[-2.65px] tracking-[3px] leading-[21px] uppercase font-medium flex items-center w-[174.37px] h-[15px]">
              <span className="[line-break:anywhere] w-full">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Working Hours
                </p>
              </span>
            </div>
          </div>
          <div className="self-stretch relative h-[105px] shrink-0 text-left text-base text-burlywood-100">
            <div className="absolute top-[0px] right-[-0.18px] tracking-[0.2px] leading-[30px]">
              <span>Mon – Fri:</span>
              <span className="text-white-200"> 7.00am – 6.00pm</span>
            </div>
            <div className="absolute top-[35px] right-[-0.18px] tracking-[0.2px] leading-[30px]">
              <span>Sat:</span>
              <span className="text-white-200"> 7.00am – 6.00pm</span>
            </div>
            <div className="absolute top-[70px] right-[-0.41px] tracking-[0.2px] leading-[30px]">
              <span>Sun:</span>
              <span className="text-white-200"> 8.00am – 6.00pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row pt-[26px] px-[100px] pb-[25px] items-center justify-center text-base border-t-[1px] border-solid border-dimgray-200">
        <div className="flex-1 flex flex-row py-0 pr-[40.042724609375px] pl-0 box-border items-start justify-between max-w-[1040px]">
          <div className="relative tracking-[0.2px] leading-[30px]">
            Legal Mentions - Terms of Use
          </div>
          <div className="relative tracking-[0.2px] leading-[30px] text-burlywood-200">
            © Copyright - 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoLocationContainer;

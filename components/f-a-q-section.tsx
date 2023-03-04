import type { NextPage } from "next";

const FAQSection: NextPage = () => {
  return (
    <section className="self-stretch bg-white-200 flex flex-col p-[100px] items-center justify-center text-center text-2xs text-darkslategray-200 font-josefin-sans">
      <div className="flex flex-col items-center justify-start gap-[50px]">
        <div className="self-stretch flex flex-col py-0 px-[60px] items-center justify-start gap-[10px]">
          <div className="relative box-border w-[59.45px] h-[29.5px] shrink-0 border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
            <div className="absolute top-[9px] left-[calc(50%_-_29.38px)] tracking-[3px] leading-[22.5px] uppercase font-medium flex items-center justify-center w-[59.65px] h-[15px]">
              FAQ
            </div>
          </div>
          <b className="relative text-4xl tracking-[0.2px] leading-[56px] capitalize inline-block font-cormorant-infant w-[442px]">
            Frequently Asked Question
          </b>
          <div className="relative text-base tracking-[0.2px] leading-[30px] text-dimgray-300 flex items-center justify-center w-[692.13px]">
            questions and answers that provides information about a specific
            topic or product
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[37px] text-left text-base text-mediumslateblue font-poppins">
          <div className="self-stretch flex flex-row py-6 px-9 items-start justify-center gap-[13px] border-[1px] border-solid border-gray-51">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch relative tracking-[0.2px] leading-[30px] font-medium">
                Kamran est-il un restaurant halal ?
              </div>
              <div className="self-stretch relative text-sm tracking-[0.2px] leading-[30px] text-dimgray-300">
                Oui, nous sommes un restaurant Halal.
              </div>
            </div>
            <div className="rounded-small bg-mediumpurple w-8 h-[17px] shrink-0 flex flex-row p-3 box-border items-center justify-center">
              <div className="h-[13px] overflow-hidden flex flex-col py-[11px] px-[5px] box-border items-center justify-center">
                <img
                  className="relative w-3.5 h-0.5 shrink-0"
                  alt=""
                  src="../vector.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row py-6 px-9 items-center justify-center gap-[13px] text-dimgray-300 border-[1px] border-solid border-gray-51">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative tracking-[0.2px] leading-[30px]">
                Acceptons-nous les réservations de groupe ?
              </div>
            </div>
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../materialsymbolsadd.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

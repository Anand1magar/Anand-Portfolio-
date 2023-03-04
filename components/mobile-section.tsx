import type { NextPage } from "next";

const MobileSection: NextPage = () => {
  return (
    <section className="self-stretch bg-hytenocolor-accent1 overflow-hidden flex flex-col py-[100px] px-[165px] items-start justify-start text-left text-base text-hytenocolor-primary-button1 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-between lg:flex-col md:flex-col">
        <div className="flex flex-col pt-0 px-0 pb-[50px] items-center justify-start gap-[10px] md:pb-[50px] md:box-border">
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
            <div className="relative tracking-[0.15em] inline-block w-[377px]">
              MOBILE
            </div>
            <div className="relative text-6xl font-semibold text-hytenocolor-dark1">
              Mobile Tech
            </div>
          </div>
          <div className="relative text-hytenocolor-text1 inline-block w-[455px]">
            Now a days mobile technology has become an essential part of modern
            life, enabling people to stay connected and productive while on the
            go.
          </div>
        </div>
        <div className="w-[478px] shrink-0 flex flex-col items-start justify-start gap-[20px] text-3xl text-black">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col py-px px-0 items-start justify-start">
              <div className="self-stretch rounded-2xxs bg-white-200 flex flex-col py-4 px-[86px] items-start justify-start">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[75px] h-[76px] shrink-0 overflow-hidden"
                    alt=""
                    src="../vscodeiconsfiletypeflutter.svg"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative font-medium">Flutter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-2xxs bg-white-200 flex flex-col py-[17px] px-[86px] items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-[76px] h-[76px] shrink-0 overflow-hidden"
                alt=""
                src="../vscodeiconsfiletypedartlang.svg"
              />
              <div className="flex flex-col items-start justify-center">
                <div className="relative font-medium">Dart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;

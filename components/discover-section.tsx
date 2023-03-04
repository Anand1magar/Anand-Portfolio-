import type { NextPage } from "next";

const DiscoverSection: NextPage = () => {
  return (
    <section className="self-stretch bg-white-200 flex flex-col p-[100px] items-center justify-center text-left text-4xl text-darkslategray-200 font-cormorant-infant">
      <div className="w-[1240px] flex flex-col items-center justify-center max-w-[1240px]">
        <div className="self-stretch flex flex-row items-center justify-center md:self-stretch md:w-auto md:h-auto md:flex-col">
          <div className="flex-1 flex flex-col py-0 px-[50px] items-center justify-center md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch relative tracking-[0.2px] leading-[56px] capitalize">
                Discover the best Indian, Pakisatni and Nepalese dishes with us.
              </div>
              <button className="cursor-pointer py-5 pr-[56.34375px] pl-[57px] bg-[transparent] flex flex-row items-start justify-start border-[2px] border-solid border-burlywood-100 hover:bg-burlywood-300">
                <b className="relative text-lg tracking-[0.2px] leading-[33px] font-josefin-sans text-burlywood-100 text-center">
                  Discover
                </b>
              </button>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[576px] object-cover ml-[-1px] md:flex-[unset] md:self-stretch"
            alt=""
            src="../rectangle-6015@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center md:flex-col">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[576px] object-cover md:flex-[unset] md:self-stretch"
            alt=""
            src="../rectangle-60151@2x.png"
          />
          <div className="flex-1 flex flex-col py-0 pr-[60px] pl-[102px] items-start justify-center ml-[-3px] md:flex-[unset] md:self-stretch">
            <div className="flex flex-col items-start justify-start gap-[70px]">
              <div className="relative tracking-[0.2px] leading-[56px] capitalize inline-block w-[459.5px]">
                We deliver your choice of cuisine nearby
              </div>
              <button className="cursor-pointer py-5 pr-[56.34375px] pl-[57px] bg-[transparent] flex flex-row items-start justify-start border-[2px] border-solid border-burlywood-100 hover:bg-burlywood-300">
                <b className="relative text-lg tracking-[0.2px] leading-[33px] font-josefin-sans text-burlywood-100 text-center">
                  Read More
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

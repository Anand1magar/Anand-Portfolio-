import type { NextPage } from "next";

const WelcomeContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-200 flex flex-row pt-[60px] px-[100px] pb-0 items-center justify-center text-left text-8xl text-white-200 font-cormorant-infant">
      <div className="flex-1 flex flex-row items-start justify-start gap-[50px] max-w-[1200px] md:h-auto md:flex-col md:gap-[80px]">
        <div className="self-stretch flex-1 relative md:flex-[unset] md:self-stretch">
          <div className="absolute top-[37px] left-[0.35px] flex flex-col items-start justify-start gap-[50px]">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <b className="relative tracking-[0.2px] leading-[105.6%] flex items-center w-[649.9px]">
                <span className="[line-break:anywhere] w-full">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Welcome to
                  </p>
                  <p className="m-0">Restaurant</p>
                </span>
              </b>
              <div className="relative text-base tracking-[0.2px] leading-[30px] font-josefin-sans flex items-center w-[649.9px]">{`The people, food and the prime locations make the perfect place goodfriends & family to come together and have great time.`}</div>
            </div>
            <button className="cursor-pointer py-5 pr-[56.96875px] pl-[57px] bg-[transparent] flex flex-row items-start justify-start border-[2px] border-solid border-burlywood-100 hover:bg-burlywood-300">
              <div className="relative text-lg tracking-[0.2px] leading-[33px] font-medium font-josefin-sans text-burlywood-100 text-center">
                View Menu
              </div>
            </button>
          </div>
        </div>
        <div className="h-[525px] flex flex-row items-start justify-start">
          <img
            className="rounded-t-2xxl rounded-b-none max-w-full overflow-hidden h-[525px] object-cover md:hidden"
            alt=""
            src="../div@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;

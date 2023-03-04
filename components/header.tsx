import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-200 flex flex-row items-center justify-center text-center text-lg text-white-200 font-josefin-sans">
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row py-5 px-[100px] items-center justify-center md:flex-col md:justify-start md:items-start">
          <div className="flex-1 flex flex-row items-center justify-between md:flex-col md:flex-[unset] md:self-stretch">
            <div className="flex flex-row py-5 pr-[56.65625px] pl-[57px] items-start justify-start border-[2px] border-solid border-burlywood-100">
              <div className="relative tracking-[0.2px] leading-[33px] font-medium">
                Call - 123 456 789
              </div>
            </div>
            <div className="relative text-7xl tracking-[0.67px] leading-[100.47px] font-semibold font-cormorant-infant text-burlywood-100 text-left">
              LOGO
            </div>
            <button className="cursor-pointer py-5 pr-[86.40625px] pl-[86.59375px] bg-burlywood-100 flex flex-row items-start justify-start border-[2px] border-solid border-burlywood-100 hover:bg-sandybrown active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1]">
              <div className="relative text-lg tracking-[0.44px] leading-[33px] font-medium font-josefin-sans text-darkslategray-200 text-center">
                Reservation
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-px px-0 items-start justify-start text-left text-base border-t-[1px] border-solid border-dimgray-100 border-b-[1px]">
          <div className="flex-1 flex flex-row py-0 px-[100px] items-start justify-start">
            <div className="flex-1 flex flex-row py-[5px] px-0 items-center justify-start">
              <div className="flex-1 flex flex-row items-center justify-between max-w-[1200px]">
                <div className="relative w-[788.55px] h-[70px] shrink-0">
                  <a className="[text-decoration:none] absolute top-[20px] left-[calc(50%_-_392.92px)] tracking-[0.2px] leading-[30px] text-burlywood-100">
                    Home
                  </a>
                  <div className="absolute top-[20px] left-[calc(50%_-_278.72px)] tracking-[0.2px] leading-[30px]">
                    Menu
                  </div>
                  <div className="absolute top-[20px] left-[calc(50%_-_133.16px)] tracking-[0.2px] leading-[30px]">
                    Delivery
                  </div>
                  <div className="absolute top-[20px] left-[calc(50%_+_161.39px)] tracking-[0.2px] leading-[30px]">
                    Gallary
                  </div>
                  <div className="absolute top-[0px] left-[calc(50%_-_4.73px)] flex flex-row pt-[18px] pb-5 pr-[45.125px] pl-0 items-start justify-start font-inter">
                    <div className="absolute my-0 mx-[!important] top-[22px] right-[20px] w-5 h-5 shrink-0 z-[0]">
                      <div className="absolute top-[0px] left-[0px] tracking-[0.2px] leading-[20px] flex items-center w-[20.4px] h-5">
                        
                      </div>
                    </div>
                    <div className="relative tracking-[0.2px] leading-[30px] font-josefin-sans z-[1]">
                      Reservation
                    </div>
                  </div>
                </div>
                <div className="flex flex-row pt-[4.21875px] px-2.5 pb-[1.78125px] items-center justify-start gap-[20px] md:hidden">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-6 h-[23px] shrink-0 overflow-hidden"
                      alt=""
                      src="../622879561ac344751081f7f3-socialwhiteicon1svg.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-6 h-[23px] shrink-0 overflow-hidden"
                      alt=""
                      src="../622879a1180929e7b5a73221-socialwhiteicon2svg.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[26px] h-[21px] shrink-0 overflow-hidden"
                      alt=""
                      src="../622879adf27831d30cd4d274-socialwhiteicon3svg.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[25px] h-6 shrink-0 overflow-hidden"
                      alt=""
                      src="../622879b72fd62b54a7fe9322-socialwhiteicon4svg.svg"
                    />
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

export default Header;

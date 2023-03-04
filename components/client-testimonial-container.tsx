import type { NextPage } from "next";
import RestaurantContainer from "../components/restaurant-container";

const ClientTestimonialContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-darkslategray-200 flex flex-row p-[100px] items-center justify-center text-left text-2xs text-white-200 font-josefin-sans">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[50px] max-w-[1240px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
          <div className="relative box-border w-[137.61px] h-[29.5px] shrink-0 border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
            <div className="absolute top-[9px] left-[0.35px] tracking-[3px] leading-[22.5px] uppercase font-medium flex items-center w-[137.81px] h-[15px]">
              Testimonial
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[5px] text-center text-4xl font-cormorant-infant">
            <b className="self-stretch relative tracking-[0.2px] leading-[56px] capitalize inline-block h-[52.77px] shrink-0">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                our clients say
              </p>
            </b>
            <div className="relative text-base tracking-[0.2px] leading-[30px] font-josefin-sans text-texts-light-2001 flex items-center justify-center w-[617.66px]">
              We love to hear from customers, so please leave a comment or say
              hello in an email.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[47px] text-center text-sm text-gray-61 font-inter md:flex-col">
          <RestaurantContainer />
          <RestaurantContainer />
          <RestaurantContainer />
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialContainer;

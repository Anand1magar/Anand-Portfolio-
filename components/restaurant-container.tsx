import type { NextPage } from "next";

const RestaurantContainer: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[35px] px-10 items-center justify-start gap-[18px] text-center text-sm text-gray-61 font-inter border-[8px] border-solid border-darkslategray-100 md:flex-[unset] md:self-stretch">
      <img
        className="relative w-[37.64px] h-[37.64px] shrink-0 overflow-hidden"
        alt=""
        src="../ridoublequotesl.svg"
      />
      <div className="self-stretch relative leading-[24px]">
        Très bon restaurant. L’accueil impeccable et les plats sont bons. J’ai
        commandé à emporter.
      </div>
      <div className="relative box-border w-[30.32px] h-0.5 shrink-0 border-t-[2px] border-solid border-gray-61" />
      <img
        className="relative w-[76.56px] h-[76.56px] shrink-0 object-cover"
        alt=""
        src="../ellipse-1831@2x.png"
      />
      <div className="self-stretch relative text-xs font-medium inline-block h-[17.55px] shrink-0">
        Client Name
      </div>
    </div>
  );
};

export default RestaurantContainer;

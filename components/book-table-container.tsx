import type { NextPage } from "next";

const BookTableContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row py-[100px] px-[200px] items-center justify-center bg-[url(../public/book-a-table-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-2xs text-white-200 font-josefin-sans">
      <div className="flex-1 bg-darkslategray-300 flex flex-col p-[84px] box-border items-center justify-center max-w-[1240px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
          <div className="self-stretch relative h-[114px] shrink-0">
            <div className="absolute top-[0px] left-[calc(50%_-_69.07px)] box-border w-[138.84px] h-[29.5px] border-t-[1px] border-solid border-burlywood-100 border-b-[1px]">
              <div className="absolute top-[9px] left-[calc(50%_-_69.42px)] tracking-[3px] leading-[22.5px] uppercase font-medium flex items-center justify-center w-[139.04px] h-[15px]">
                reservation
              </div>
            </div>
            <b className="absolute top-[40px] left-[calc(50%_-_135.48px)] text-4xl tracking-[0.2px] leading-[56px] capitalize font-cormorant-infant">
              Book Your Table
            </b>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Name"
              />
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Ph No"
              />
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
              />
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Time"
              />
              <input
                className="font-medium font-josefin-sans text-lg bg-[transparent] flex-1 flex flex-col py-6 px-[21px] items-start justify-start border-[1px] border-solid border-gray"
                type="text"
              />
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-medium font-josefin-sans text-lg self-stretch flex flex-row items-start justify-start"
              placeholder="Message"
            />
          </div>
          <button
            className="[border:none] py-[17.5px] pr-[54.5px] pl-[55px] bg-white-200 flex flex-row items-start justify-start"
            disabled
          >
            <div className="relative text-lg leading-[33px] font-medium font-josefin-sans text-darkslategray-200 text-center">
              Book A Table
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTableContainer;

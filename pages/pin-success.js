import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import check from "../assets/Images/check.png";
import Image from "next/image";
import Link from "next/link";

const PinSuccess = () => {
  return (
    <>
      <div className="flex m-0 h-screen">
        {/* container left */}
        <div className="w-1/2 bg-[#B1B2FF] px-12 py-5 text-white relative h-screen overflow-y-scroll hidden md:block">
          <div className="font-bold	text-3xl">YukPay</div>
          <Image src={line} alt="line" className="absolute top-[0] left-[0]" />
          <Image src={phone} alt="Image"></Image>
          <div className="font-bold	text-2xl">
            App that Covering Banking Needs.
          </div>
          <div className="text-base	h-screen">
            Yukpay is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Yukpay everyday with worldwide
            users coverage.
          </div>
        </div>
        {/* container right */}
        <div className="w-full md:w-1/2 md:px-12 px-0 md:py-20 pb-0 pt-20 bg-[#FAFCFF] h-screen overflow-y-scroll">
          <div className="block md:hidden text-xl font-bold text-center text-[#B1B2FF] mb-10">
            YukPay
          </div>
          <div className="flex md:block flex-col items-center md:items-left bg-white rounded-t-3xl md:bg-[#FAFCFF] md:text-left text-center md:px-0 px-2 md:py-0 py-5">
            <div className="flex justify-center items-center w-10 h-10 bg-[#1EC15F] md:text-left text-center rounded-full mb-7">
              <Image src={check} alt="check" className="w-5 " />
            </div>
            <div className="font-bold	text-xl mb-10 hidden md:block">
              Your PIN Was Successfully Created
            </div>
            <div className="font-bold	text-xl mb-10 block md:hidden">
              PIN Successfully Created
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] hidden md:block">
              Your PIN was successfully created and you can now access all the
              features in YukPay.
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] block md:hidden">
              Your PIN was successfully created and you can now access all the
              features in YukPay. Login to your new account and start exploring!
            </div>
            <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold mt-10 text-white hidden md:block">
              Go To Dashboard
            </button>
            <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold mt-10 text-white block md:hidden">
              Login Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinSuccess;

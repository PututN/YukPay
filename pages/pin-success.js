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
        <div className="w-1/2 bg-[#B1B2FF] px-12 py-5 h-screen text-white relative h-screen overflow-y-scroll">
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
        <div className="w-1/2 px-12 py-20 bg-[#FAFCFF] h-screen overflow-y-scroll flex flex-col">
          <div className="flex justify-center items-center w-10 h-10 bg-[#1EC15F] rounded-full mb-7">
            <Image src={check} alt="check" className="w-5 " />
          </div>
          <div className="font-bold	text-xl mb-10">
            Your PIN Was Successfully Created
          </div>
          <div className="text-base	mb-5">
            Your PIN was successfully created and you can now access all the
            features in YukPay.
          </div>

          <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold mt-10 text-white">
            Go To Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default PinSuccess;

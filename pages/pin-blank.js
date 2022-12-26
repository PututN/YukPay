import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PinBlank = () => {
  const inputRef = React.useRef(null);
  const handleOnChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
      inputRef.current.value = e.target.value;
    }
  };

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
        <div className="w-full md:w-1/2 md:px-12 px-0 md:py-20 pb-0 pt-20 bg-[#FAFCFF] h-screen overflow-y-scroll ">
          <div className="block md:hidden text-xl font-bold text-center text-[#B1B2FF] mb-10">
            YukPay
          </div>
          <div className="bg-white rounded-t-3xl md:bg-[#FAFCFF] md:text-left text-center md:px-0 px-2 md:py-0 py-5">
            <div className="font-bold	text-xl mb-10 hidden md:block">
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </div>
            <div className="font-bold	text-xl mb-10 block md:hidden">
              Create Security PIN
            </div>
            <div className="text-base	mb-5 hidden md:block">
              Create 6 digits pin to secure all your money and your data in
              FazzPay app. Keep it secret and don’t tell anyone about your
              FazzPay account password and the PIN.
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] block md:hidden">
              Create a PIN that’s contain 6 digits number for security purpose
              in FazzPay.
            </div>
            <form>
              <div className="flex text-center w-full mb-10">
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold  border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold  border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold  border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    type="number"
                    onChange={handleOnChange}
                    className="w-10 h-10 text-center rounded-md text-lg shadow-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
              </div>

              <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold text-white">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinBlank;

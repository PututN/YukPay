import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";


const PinBlank = () => {
  const router = useRouter()
  const [pin, setNewPin] = useState([]);
  console.log(pin);
  const inputRef1 = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const inputRef3 = React.useRef(null);
  const inputRef4 = React.useRef(null);
  const inputRef5 = React.useRef(null);
  const inputRef6 = React.useRef(null);
  const handleOnChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    const pinInput = {
      1: inputRef1,
      2: inputRef2,
      3: inputRef3,
      4: inputRef4,
      5: inputRef5,
      6: inputRef6,
    };
    const currentInput = Number(e.target.name);
    if (e.target.value.length) {
      pinInput[currentInput + 1]?.current?.focus();
    } else {
      pinInput[currentInput - 1]?.current?.focus();
      if (currentInput < 6) {
        for (let i = currentInput; i <= 6; i++) {
          pinInput[i].current.value = "";
        }
      }
    }
    let setPin = "";
    for (let i = 1; i <= 6; i++) {
      setPin += pinInput[i].current.value;
      setNewPin(setPin);
    }
  };
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);
  const userId = decode.id
  const changeNewPin = async (e) => {
    e.preventDefault();
    //axios post have 3 parameter (endpoint, data post, token)
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/set-pin`,
      { userId, pin },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
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
                <div className="flex-1 ">
                  <input
                    ref={inputRef1}
                    type="number"
                    onChange={handleOnChange}
                    name="1"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={inputRef2}
                    type="number"
                    onChange={handleOnChange}
                    name="2"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={inputRef3}
                    type="number"
                    onChange={handleOnChange}
                    name="3"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={inputRef4}
                    type="number"
                    onChange={handleOnChange}
                    name="4"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={inputRef5}
                    type="number"
                    onChange={handleOnChange}
                    name="5"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={inputRef6}
                    type="number"
                    onChange={handleOnChange}
                    name="6"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
              </div>

              <button
                onClick={changeNewPin}
                className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold text-white"
              >
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

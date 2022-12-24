import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import { Mail, Lock, EyeOff, Eye, User } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <>
      <div className="flex m-0 h-screen">
        {/* container left */}
        <div className="w-1/2 bg-[#B1B2FF] px-12 py-5 h-screen text-white relative h-screen overflow-y-scroll hidden md:block">
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
            <div className="font-bold	text-xl mb-10">Sign Up</div>
            <div className="text-base	mb-5 text-[#3A3D4299]">
              Create your account to access YukPay.
            </div>
            <form>
              <div className="md:hidden block relative mb-5">
                <input
                  name="userName"
                  type="text"
                  className="w-full border-b-2 focus:outline-none px-12 py-3 md:bg-[#FAFCFF] bg-white"
                  placeholder="Enter your username"
                ></input>
                <User
                  style={{ color: "#A9A9A999" }}
                  className="absolute top-[23%]"
                />
              </div>

              <div className="md:block hidden">
                <div className=" relative mb-5">
                  <input
                    name="firstName"
                    type="text"
                    className="w-full border-b-2 focus:outline-none px-12 py-3 bg-[#FAFCFF]"
                    placeholder="Enter your firstname"
                  ></input>
                  <User
                    style={{ color: "#A9A9A999" }}
                    className="absolute top-[23%]"
                  />
                </div>
                <div className=" relative mb-5">
                  <input
                    name="lastName"
                    type="text"
                    className="w-full border-b-2 focus:outline-none px-12 py-3 bg-[#FAFCFF]"
                    placeholder="Enter your lastname"
                  ></input>
                  <User
                    style={{ color: "#A9A9A999" }}
                    className="absolute top-[23%]"
                  />
                </div>
              </div>
              <div className="relative mb-5">
                <input
                  name="email"
                  type="email"
                  className="w-full border-b-2 focus:outline-none px-12 py-3 md:bg-[#FAFCFF] bg-white"
                  placeholder="Enter your e-mail"
                ></input>
                <Mail
                  style={{ color: "#A9A9A999" }}
                  className="absolute top-[23%]"
                />
              </div>
              <div className="relative mb-5">
                <input
                  name="password"
                  type={type}
                  className="py-3 px-12 w-full md:bg-[#FAFCFF] bg-white w-full border-b-2 focus:outline-none"
                  placeholder="Enter your password"
                ></input>
                <Lock
                  style={{ color: "#A9A9A999" }}
                  className="absolute top-[23%]"
                />
                {type === "password" ? (
                  <EyeOff
                    className="absolute right-0 top-[23%] r cursor-pointer"
                    style={{ color: "#A9A9A999" }}
                    onClick={showPassword}
                  />
                ) : (
                  <Eye
                    className="absolute right-0 top-[23%] r cursor-pointer"
                    style={{ color: "#A9A9A999" }}
                    onClick={showPassword}
                  />
                )}
              </div>
              <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold text-white">
                Login
              </button>
            </form>

            <div className="text-center text-base	mt-6">
              Already have an account? Let’s{" "}
              <Link href="#" className="text-[#6379F4]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

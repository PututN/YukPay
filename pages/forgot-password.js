import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import mail from "../assets/Images/mail.png";
import { Mail } from "react-feather";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
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
          <div className="font-bold	text-xl mb-10">
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </div>
          <div className="text-base text-[#3A3D4299] mb-5">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </div>
          <form>
            <div className="relative mb-5">
              <input
                name="email"
                type="email"
                className="w-full border-b-2 focus:outline-none px-12 py-3 bg-[#FAFCFF]"
                placeholder="Enter your e-mail"
              ></input>
              <Mail
                style={{ color: "#A9A9A999" }}
                className="absolute top-[23%]"
              />
            </div>
          </form>

          <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold mt-10 text-white">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

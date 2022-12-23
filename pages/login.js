import phone from "../assets/Images/phone.png";
import mail from "../assets/Images/mail.png";
import lock from "../assets/Images/lock.png";
import line from "../assets/Images/line.png";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
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
        <div className="w-1/2 px-12 py-20 bg-[#FAFCFF] h-screen overflow-y-scroll">
          <div className="font-bold	text-xl mb-10">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="text-base	mb-5 text-[#3A3D4299]">
            Transfering money is eassier than ever, you can access YukPay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <form>
            <div className="relative mb-5 border-b border">
              <input
                name="email"
                type="email"
                className="border-none py-3 px-7 w-full bg-[#FAFCFF] text-base font-semibold"
                placeholder="Enter your e-mail"
              ></input>
              <Image src={mail} alt="mail" className="absolute top-[28%]" />
            </div>
            <div className="relative border-b border">
              <input
                name="password"
                type="password"
                className="border-none py-3 px-7 w-full bg-[#FAFCFF] text-base font-semibold"
                placeholder="Enter your password"
              ></input>
              <Image src={lock} alt="mail" className="absolute top-[28%]" />
            </div>
            <Link
              href="#"
              className="justify-end	flex text-sm font-semibold my-6"
            >
              Forgot password?
            </Link>
            <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold text-white">
              Login
            </button>
          </form>
          <div className="text-center text-base	mt-6">
            Don’t have an account? Let’s{" "}
            <Link href="#" className="text-[#6379F4]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

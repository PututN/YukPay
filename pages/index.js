import Link from "next/link";
import Image from "next/image";
import png_phone from "../assets/Images/png-phone-edited.png";
import microsoft from "../assets/Images/microsoft.png";
import dropbox from "../assets/Images/dropbox.png";
import hm from "../assets/Images/hm.png";
import airbnb from "../assets/Images/airbnb.png";
import phone_bg from "../assets/Images/phone-bg.png";
import lock_bg from "../assets/Images/lock-bg.png";
import download_bg from "../assets/Images/download-bg.png";

const Home = () => {
  return (
    <>
      <nav className="flex bg-[#B1B2FF] px-16 py-8">
        <div className="font-bold	text-3xl flex-1 text-white">YukPay</div>
        <div className="flex-row">
          <Link
            href="/login"
            className="font-bold text-lg px-4 py-3 border-2 border border-white text-white rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="font-bold text-lg px-4 py-3 bg-white text-[#B1B2FF] rounded-lg ml-5"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <section className="bg-[#B1B2FF] px-16 flex pt-5">
        <div className="flex justify-center flex-col mr-7">
          <div className="font-extrabold text-3xl text-white mb-5">
            Awesome App For Saving Time.
          </div>
          <div className="text-lg text-white mb-5">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </div>
          <Link
            href="#"
            className="text-center bg-white px-5 py-3 rounded-lg text-lg text-[#6379F4]"
          >
            Try It Free
          </Link>
        </div>
        <Image src={png_phone} alt="phone"></Image>
      </section>
      <div className="bg-[#EFF0FC] px-16 py-10 flex items-center justify-center">
        <Image src={microsoft} alt="microsoft" className="" />
        <Image src={dropbox} alt="dropbox" className="mx-14" />
        <Image src={hm} alt="hm" className="" />
        <Image src={airbnb} alt="airbnb" className="ml-14" />
      </div>
      <section className="bg-[#FAFCFF] px-16 py-28">
        <div className="font-extrabold text-3xl text-center">
          <span className="text-[#6379F4]">About</span> the Application.
        </div>
        <div className="text-[#3A3D42] text-lg text-center my-5">
          We have some great features from the application and it’s totally free
          to use by all users around the world.
        </div>
        <div className="flex">
          <div className="bg-white rounded-lg flex w-1/3">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={phone_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">24/7 Support</div>
              <div className="text-lg	">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex w-1/3 mx-5">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={lock_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">Data Privacy</div>
              <div className="text-lg	">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex w-1/3">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={download_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">Easy Download</div>
              <div className="text-lg	">
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

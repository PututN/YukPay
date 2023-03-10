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
import png_phone1 from "../assets/Images/png_phone1.png";
import png_phone2 from "../assets/Images/png_phone2.png";
import { ArrowLeft, ArrowRight } from "react-feather";
import profile from "../assets/Images/profile.png";
import React,{ useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Index = () => {
  const token = useSelector((state) => state.auth.token);

  const router= useRouter()
  
  React.useEffect (() => {
    if(token) {
      router.replace('/home')
    }
  },[token, router])
  

  return (
    <>
      <nav className="flex bg-[#6379F4] items-center px-2 sm:px-8 lg:px-16 py-8">
        <div className="font-bold	text-3xl flex-1 text-white">YukPay</div>
        <div className="flex-row">
          <Link
            href="/login"
            className="font-bold text-sm sm:text-lg sm:px-4 px-2 sm:py-3 py-1 border-2 border-white text-white rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="font-bold text-sm sm:text-lg sm:px-4 px-2 sm:py-3 py-1 bg-white text-[#6379F4] rounded-lg ml-2 sm:ml-5"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <section className="bg-[#6379F4] px-8 lg:px-16 flex flex-col md:flex-row pt-5">
        <div className="flex justify-center items-center md:items-start flex-col mr-7">
          <div className="font-extrabold text-3xl text-center md:text-left text-white mb-5">
            Awesome App For Saving Time.
          </div>
          <div className="text-lg text-white text-center md:text-left mb-5">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </div>
          <Link
            href="/home"
            className="md:w-1/3 sm:w-1/2 w-2/3 text-center bg-white px-5 py-3 rounded-lg text-lg text-[#6379F4]"
          >
            Try It Free
          </Link>
        </div>
        <Image src={png_phone} alt="phone"></Image>
      </section>
      <div className="bg-[#EFF0FC] px-8 lg:px-16 py-10 flex items-center justify-center">
        <Image src={microsoft} alt="microsoft" className="" />
        <Image src={dropbox} alt="dropbox" className="md:mx-14 mx-3" />
        <Image src={hm} alt="hm" className="" />
        <Image src={airbnb} alt="airbnb" className="md:ml-14 ml-3 sm:block hidden" />
      </div>
      <section className="bg-[#FAFCFF] px-8 lg:px-16 py-8 md:py-28">
        <div className="font-extrabold text-3xl text-center">
          <span className="text-[#6379F4]">About</span> the Application.
        </div>
        <div className="text-[#3A3D42] text-lg text-center my-5">
          We have some great features from the application and it???s totally free
          to use by all users around the world.
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-white rounded-lg flex w-full md:w-1/3">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={phone_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">24/7 Support</div>
              <div className="text-lg	">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex w-full md:w-1/3 mx-0 md:mx-5 my-5 md:my-0">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={lock_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">Data Privacy</div>
              <div className="text-lg	">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex w-full md:w-1/3">
            <div className="px-2 py-5 flex flex-col items-center text-[#3A3D42]">
              <Image src={download_bg} alt="phone" className="text-center" />
              <div className="font-bold text-2xl my-5">Easy Download</div>
              <div className="text-lg	">
                Zwallet is 100% totally free to use it???s now available on Google
                Play Store and App Store.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EFF0FC] px-8 lg:px-16 flex md:flex-row md:justify-start justify-end flex-col-reverse">
        <div className="md:w-1/4 w-full mr-0 md:mr-10">
          <Image src={png_phone1} alt="phone1" />
          <Image src={png_phone2} alt="phone2" />
        </div>
        <div className="flex-1 flex md:block flex-col items-center">
          <div className="text-[#3A3D42] md:text-6xl text-3xl text-center md:text-left	font-extrabold my-16">
            All The <span className="text-[#6379F4]">Great</span> YukPay
            Features.
          </div>
          <div className="bg-white p-6 rounded-3xl w-full md:w-3/4 mb-7">
            <div className="text-xl font-bold">
              <span className="text-[#6379F4]">1.</span> Small Fee
            </div>
            <div className="text-[#3A3D42E5] text-lg mt-3">
              We only charge 5% of every success transaction done in YukPay app.
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl w-full md:w-3/4 mb-7">
            <div className="text-xl font-bold">
              <span className="text-[#6379F4]">2.</span> Data Secured
            </div>
            <div className="text-[#3A3D42E5] text-lg mt-3">
              All your data is secured properly in our system and it???s
              encrypted..
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl w-full md:w-3/4 mb-7">
            <div className="text-xl font-bold">
              <span className="text-[#6379F4]">3.</span> User Friendly
            </div>
            <div className="text-[#3A3D42E5] text-lg mt-3">
              YukPay come up with modern and sleek design and not complicated..
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFCFF] px-8 lg:px-16 md:py-28 py-8 flex flex-col items-center justify-center">
        <div className="text-[#3A3D42] md:text-6xl text-3xl	font-extrabold">
          What Users are <span className="text-[#6379F4]">Saying.</span>
        </div>
        <div className="text-[#3A3D42E5] text-lg my-12 md:w-1/2 w-full text-center">
          We have some great features from the application and it???s totally free
          to use by all users around the world.
        </div>
        <div className="flex-row flex">
          <div className="md:flex items-center hidden">
            <div className="bg-white p-3 rounded-2xl">
              <ArrowLeft />
            </div>
          </div>
          <div className="bg-white rounded-xl md:p-10 p-3 flex flex-col items-center justify-center md:mx-5 mx-0">
            <Image src={profile} alt="profile" />
            <div className="font-bold text-2xl text-[#373C46] my-5">
              Alex Hansinburg
            </div>
            <div className="text-[#56585B] text-xl">Designer</div>
            <div className="text-center text-[#676A71] text-lg mt-8">
              ???This is the most outstanding app that I???ve ever try in my live,
              this app is such an amazing masterpiece and it???s suitable for you
              who is bussy with their bussiness and must transfer money to
              another person aut there. Just try this app and see the power!???
            </div>
          </div>
          <div className="md:flex items-center hidden">
            <div className="bg-white p-3 rounded-2xl">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#6379F4] px-8 lg:px-24 py-8 md:py-20 hidden lg:block">
        <Link href="/" className="text-white text-3xl">
          YukPay
        </Link>
        <div className="w-60 text-white mt-10">
          <p>
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
        </div>
        <div className="border-0 border-b mt-10"></div>
        <div className="flex mt-7">
          <div className="flex-1 text-white">
            <p>2022 YukPay. All right reserved.</p>
          </div>
          <div className="flex gap-6 text-white ">
            <p>+62 8954-2148-3102</p>
            <Link href="/">contact@YukPay.com</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

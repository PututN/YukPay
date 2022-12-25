import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  Edit2,
  Search,
  ArrowDown
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import Link from "next/link";
import profile2 from "../assets/Images/profile2.png";
import Modal from "../components/Modal";
import { useState } from "react";

const Transfer_Input = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav>
        <div className="px-16 py-8 flex items-center justify-center rounded-b-2xl">
          <div className="flex-1 text-[#6379F4] text-3xl font-bold">YukPay</div>
          <div className="flex gap-5 justify-center items-center">
            <Image src={profile_nav} alt="profile" />
            <div>
              <div className="text-[#3A3D42] text-lg font-bold">
                Robert Chandler
              </div>
              <div className="text-sm">+62 8139 3877 7946</div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost rounded-btn">
                <Bell />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content py-2 bg-base-100 rounded-box w-52 mt-4 shadow-lg"
              >
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Accept from Joshua Lee</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp220.000</div>
                    <ArrowDown style={{color:"#4CEDB3"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Deni</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp149.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Deni</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp149.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Jessica Lee</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp100.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Top up</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp300.000</div>
                    <ArrowDown style={{color:"#4CEDB3"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-[#FAFCFF] px-16 py-8 flex">
        <div className="w-1/4 bg-white flex justify-between h-screen flex-col py-9 rounded-3xl mr-4">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16">
                <Grid className="mr-6" />
                <div className="text-lg font-bold text-[#3A3D42CC]">
                  Dashboard
                </div>
              </div>
            </Link>
            <div>
              <Link
                href="/transfer-search"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]"
              >
                <ArrowUp className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold	text-[#6379F4]">Transfer</div>
              </Link>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Top Up</div>
              </div>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <div className="flex items-center mb-5">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer Money
            </div>
          </div>
          <div className="flex mb-8 shadow-md p-3">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile2} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Momo Taro
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    +62 812-4343-6731
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-5 w-1/2">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>
          <form>
            <div className="flex flex-col items-center justify-center gap-10 mt-10 mb-24">
              <input type="number" placeholder="0.00" className="text-center text-4xl font-bold text-[#B5BDCC]"></input>
              <div className="text-base font-bold text-[#3A3D42]">Rp120.000 Available</div>
              <div className="relative w-1/2">
                <Edit2 style={{color:"#A9A9A999"}} className="absolute top-[24%]"/>
                <input className="text-[#A9A9A999] w-full py-3 px-9 border-[#A9A9A999] border-b-2 text-base" type="text" placeholder="Add some notes"></input>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white"
                onClick={() => setShowModal(true)}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#6379F4] px-24 py-5">
        <div className="hidden">
          <Link href="/" className="text-white text-3xl">
            YukPay
          </Link>
          <div className="w-60 text-white mt-10">
            <p>
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
          </div>
          <div className="border-0 border-b mt-10"></div>
        </div>
        <div className="flex">
          <div className="flex-1 text-white">
            <p>2022 YukPay. All right reserved.</p>
          </div>
          <div className="flex gap-6 text-white ">
            <p>+62 8954-2148-3102</p>
            <Link href="/">contact@YukPay.com</Link>
          </div>
        </div>
      </footer>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Transfer_Input;

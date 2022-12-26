import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
  Search,
  ArrowRight,
  Edit2,
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import Link from "next/link";
import profile1 from "../assets/Images/profile1.png";
import profile2 from "../assets/Images/profile2.png";
import profile4 from "../assets/Images/profile4.png";
import profile5 from "../assets/Images/profile5.png";
import ModalTopUp from "../components/ModalTopUp";
import { useState } from "react";

const Profile = () => {
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
                    <div className="text-[#7A7A7A] text-sm">
                      Accept from Joshua Lee
                    </div>
                    <div className="text-lg font-bold text-[#43484F]">
                      Rp220.000
                    </div>
                    <ArrowDown
                      style={{ color: "#4CEDB3" }}
                      className="absolute top-[35%] left-[5%]"
                    />
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">
                      Transfer to Deni
                    </div>
                    <div className="text-lg font-bold text-[#43484F]">
                      Rp149.000
                    </div>
                    <ArrowUp
                      style={{ color: "#FF5B37" }}
                      className="absolute top-[35%] left-[5%]"
                    />
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">
                      Transfer to Deni
                    </div>
                    <div className="text-lg font-bold text-[#43484F]">
                      Rp149.000
                    </div>
                    <ArrowUp
                      style={{ color: "#FF5B37" }}
                      className="absolute top-[35%] left-[5%]"
                    />
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">
                      Transfer to Jessica Lee
                    </div>
                    <div className="text-lg font-bold text-[#43484F]">
                      Rp100.000
                    </div>
                    <ArrowUp
                      style={{ color: "#FF5B37" }}
                      className="absolute top-[35%] left-[5%]"
                    />
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Top up</div>
                    <div className="text-lg font-bold text-[#43484F]">
                      Rp300.000
                    </div>
                    <ArrowDown
                      style={{ color: "#4CEDB3" }}
                      className="absolute top-[35%] left-[5%]"
                    />
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
              <Link href="/transfer-search" className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </Link>
            </div>
            <div>
              <Link href="/topup-search" className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <div className="text-lg font-bold 	text-[#3A3D42CC]">Top Up</div>
              </Link>
            </div>
            <div>
              <Link
                href="/profile"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]"
              >
                <User className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold text-[#6379F4]">Profile</div>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl py-10">
          <div className="flex flex-col items-center">
            <Image src={profile5} alt="profile" />
            <Link href="/edit-phoneNumber" className="relative mt-3 mb-5">
              <Edit2
                className="absolute w-4 h-4 top-[20%] left-[-85%]"
                style={{ color: "#7A7886" }}
              />
              <div className="text-[#7A7886] text-base">
                Edit
              </div>
            </Link>
            <div className="text-[#4D4B57] font-bold">Robert Chandler</div>
            <div className="text-[#7A7886] text-base mt-3 mb-10">
              +62 813-9387-7946
            </div>
            <Link href="/personal-info" className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">
                Personal Information
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link href="/change-password" className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">
              Change Password
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link href="/change-pin" className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">
              Change PIN
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <div className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">
                Logout
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Profile;

import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
  Eye,
  ArrowRight,
  Edit2,
  Lock,
  EyeOff,
  Mail,
  Phone,
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import withAuth from "../components/hoc/withAuth";

const Edit_PhoneNumber = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  //add phone number
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(null);
  const addPhoneNumber = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError("Please fill phone number");
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading("Loading...");
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/profile/phone-number`,
        { phoneNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setSuccess("Phone number updated");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
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
            <button onClick={handleLogout} className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <div className="flex items-center mb-5">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Edit Phone Number
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </div>
          <div className="flex justify-center">
            <form className="w-1/2 flex flex-col justify-center gap-12">
              <div className="flex relative border-b-2 border-[#A9A9A999] py-3 pl-8 focus:outline-none">
                <Phone className="absolute left-[0] peer-focus:text-[#6379F4] text-[#A9A9A999]" />
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="focus:outline-none text-[#3A3D42] font-semibold text-base focus:border-[#6379F4] peer"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
              <button
                onClick={addPhoneNumber}
                className="w-full btn bg-[#6379F4] rounded-xl text-lg font-bold text-white"
              >
                Edit Phone Number
              </button>
              {error && (
                <div className="text-lg font-bold text-center text-red-400">
                  {error}
                </div>
              )}
              {loading && (
                <div className="text-lg font-bold text-center text-blue-400">
                  {loading}
                </div>
              )}
              {success && (
                <div className="text-lg font-bold text-center text-green-400">
                  {success}
                </div>
              )}
            </form>
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

export default withAuth(Edit_PhoneNumber);

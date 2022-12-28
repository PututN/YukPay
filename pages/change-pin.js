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

const Change_Pin = () => {
  const [newPin, setNewPin] = useState([]);
  console.log(newPin);
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
    let pin = "";
    for (let i = 1; i <= 6; i++) {
      pin += pinInput[i].current.value;
      setNewPin(pin);
    }
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);

  console.log(newPin);
  const changeNewPin = async (e) => {
    e.preventDefault();
    //axios post have 3 parameter (endpoint, data post, token)
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/profile/change-pin`,
      { newPin },
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
              Change PIN
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            Enter your current 6 digits YukPay PIN below to continue to the next
            steps.
          </div>
          <div className="flex justify-center">
            <form className="w-1/2 flex flex-col justify-center gap-12">
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
                className="w-full bg-[#B1B2FF] rounded-xl py-3 text-lg font-bold text-white"
              >
                Continue
              </button>
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

export default Change_Pin;

import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
  Search,
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
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";

const Topup_Search = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
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
              <Link
                href="/topup-search"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]"
              >
                <Plus className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold	text-[#6379F4]">Top Up</div>
              </Link>
            </div>
            <div>
              <Link href="/profile" className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
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
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6">
          <div className="flex flex-col mb-5 gap-10">
            <div className="text-[#3A3D42] font-bold text-lg">Top Up</div>
            <div className="text-[#7A7886] text-sm w-1/2">
              Come on, top up immediately to Yukpay, so you can enjoy the
              facilities and features provided
            </div>
            <button
              className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white"
              onClick={() => setShowModal(true)}
            >
              Top Up
            </button>
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
      <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default withAuth(Topup_Search);

import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  Edit2,
  Search,
  ArrowDown,
  ArrowLeft,
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import Link from "next/link";
import profile2 from "../assets/Images/profile2.png";
import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import NavbarHidden from "../components/NavbarHidden";

const Transfer_Input = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <NavbarHidden />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white hidden md:flex justify-between h-screen flex-col py-9 rounded-3xl mr-4">
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
              <Link href="/topup-search" className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Top Up</div>
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
        <div className="w-full md:w-3/4 bg-[#FAFCFF] md:bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <Link
            href="/transfer-search"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer
            </div>
          </Link>
          <div className="items-center mb-5 hidden md:flex">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer Money
            </div>
          </div>
          <div className="flex mb-8 shadow-md p-3 bg-white">
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
          <div className="text-[#7C7895] font-bold text-base block md:hidden text-center">
            Rp120.000 Available
          </div>
          <div className="text-[#7A7886] text-sm mb-5 w-1/2 md:block hidden">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-10 mt-10 mb-24">
              <input
                type="number"
                placeholder="0.00"
                className="text-center text-4xl font-bold text-[#B5BDCC] bg-[#FAFCFF] md:bg-white"
              ></input>
              <div className="text-base font-bold text-[#3A3D42] hidden md:block">
                Rp120.000 Available
              </div>
              <div className="relative md:w-1/2 w-full bg-[#FAFCFF] md:bg-white">
                <Edit2
                  style={{ color: "#A9A9A999" }}
                  className="absolute top-[24%]"
                />
                <input
                  className="text-[#A9A9A999] w-full py-3 px-9 border-[#A9A9A999] border-b-2 text-base bg-[#FAFCFF] md:bg-white"
                  type="text"
                  placeholder="Add some notes"
                ></input>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white"
                onClick={() => setShowModal(!showModal)}
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </section>
      {showModal && <Modal onClose={() => setShowModal(!showModal)} />}
      <footer className="bg-[#6379F4] px-24 py-5 md:block hidden">
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

export default Transfer_Input;

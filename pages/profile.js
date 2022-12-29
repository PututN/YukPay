/* eslint-disable react-hooks/exhaustive-deps */
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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import axiosHelper from "../helper/axios.helper";
import jwt_decode from "jwt-decode";
import user from "../assets/Images/user.png";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  //get profile
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);

  const fetchProfile = async () => {
    try {
      const response = await axiosHelper.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  //upload picture
  const [picture, setPicture] = useState([]);
  console.log(picture);

  const uploadPicture = async (e) => {
    e.preventDefault();
    const file = e.target.picture.files[0]
    const formData = new FormData();
    formData.append("picture", file);
    //axios post have 3 parameter (endpoint, data post, token)
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/profile`,
      formData,
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
        <div className="w-3/4 bg-white h-screen rounded-3xl py-10">
          <div className="flex flex-col items-center">
            {profile?.picture ? (
              <Image
                className="w-[50px] h-[50px] rounded-lg"
                width={50}
                height={50}
                src={`${process.env.NEXT_PUBLIC_URL}/upload/` + profile?.picture}
                alt="profile"
              />
            ) : (
              <Image
                className="w-[50px] h-[50px] rounded-lg"
                src={user}
                alt="profile"
              />
            )}
            <form onSubmit={uploadPicture} encType="multipart/form-data" className="flex flex-col">
              <input
                type="file"
                name="picture"
                // onChange={(file) => setPicture(file)}
              ></input>
              <button type="submit" className="relative mt-3 mb-5">
                <Edit2
                  className="absolute w-4 h-4 top-[20%] left-[25%]"
                  style={{ color: "#7A7886" }}
                />
                <div className="text-[#7A7886] text-base">Upload Image</div>
              </button>
            </form>
            <div className="text-[#4D4B57] font-bold">
              {profile?.firstName} {profile?.lastName}
            </div>
            {profile?.phoneNumber ? (
              <div className="text-[#7A7886] text-base mt-3 mb-10">
                {profile?.phoneNumber}
              </div>
            ) : (
              <Link href="/edit-phoneNumber" className="mt-3 mb-10">
                Add Phone Number
              </Link>
            )}
            <Link
              href="/personal-info"
              className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">
                Personal Information
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link
              href="/change-password"
              className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">
                Change Password
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link
              href="/change-pin"
              className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">Change PIN</div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <div className="bg-[#E5E8ED] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">Logout</div>
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

export default withAuth(Profile);

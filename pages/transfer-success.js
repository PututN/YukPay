import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  Download,
  Search,
  Check,
  ArrowDown,
} from "react-feather";
import Image from "next/image";
import moment from "moment";
import user from "../assets/Images/user.png";
import profile_nav from "../assets/Images/profile_nav.png";
import Link from "next/link";
import profile2 from "../assets/Images/profile2.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axiosHelper from "../helper/axios.helper";

const Transfer_Success = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const [profile, setProfile] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);

  const { amount, recipientId, notes, time } = useSelector(
    (state) => state.transfer
  );
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

  const [recipient, setRecipient] = useState({});
  const fetchRecipient = async () => {
    try {
      const response = await axiosHelper.get(
        `/transactions/recipient/${recipientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecipient(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchProfile();
    fetchRecipient();
  }, [recipientId]);

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
            <button onClick={handleLogout} className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#1EC15F] flex items-center justify-center">
              <Check style={{ color: "#FFFFFF" }} />
            </div>
            <div className="text-[#4D4B57] text-xl font-bold">
              Transfer Success
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Amount</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  Rp{Number(amount).toLocaleString("id")}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Balance Left</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  Rp{Number(profile?.balance).toLocaleString("id")}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Date & Time</div>
                <div className="text-[#4D4B57] text-xl font-bold">{time}</div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Notes</div>
                <div className="text-[#4D4B57] text-xl font-bold">{notes}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer To
            </div>
          </div>
          <div className="flex mb-8 shadow-md p-3">
            <div className="flex-1">
              <div className="flex gap-3">
                {recipient?.picture ? (
                  <Image
                    className="w-[75px] h-[75px] rounded-lg"
                    width={50}
                    height={50}
                    src={
                      `${process.env.NEXT_PUBLIC_URL}/upload/` +
                      recipient?.picture
                    }
                    alt="profile"
                  />
                ) : (
                  <Image
                    className="w-[75px] h-[75px] rounded-lg"
                    src={user}
                    alt="profile"
                  />
                )}

                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    {recipient?.firstName} {recipient?.lastName}
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    {recipient?.phoneNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-5 ">
            <div className="relative">
              <button className="bg-[#6379F426] pl-12 pr-7 py-2 rounded-md text-lg font-bold text-[#6379F4]">
                Download PDF
              </button>
              <Download
                style={{ color: "#6379F4" }}
                className="absolute top-[20%] left-[8%]"
              />
            </div>

            <button className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white">
              Back to Home
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
    </>
  );
};

export default withAuth(Transfer_Success);

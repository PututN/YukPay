import React from "react";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
} from "react-feather";
import profile_nav from "../assets/Images/profile_nav.png";
import graphic from "../assets/Images/graphic.png";
import profile1 from "../assets/Images/profile1.png";
import logo_Netflix from "../assets/Images/logo_Netflix.png";
import profile3 from "../assets/Images/profile3.png";
import logo_Adobe from "../assets/Images/logo_Adobe.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <>
      <nav className="">
        <div className="md:justify-center md:px-16 px-3 py-8 flex items-center justify-start rounded-b-2xl md:bg-white bg-[#FAFCFF]">
          <div className="flex-1 text-[#6379F4] text-3xl font-bold md:block hidden">
            YukPay
          </div>
          <div className="flex gap-5 items-center w-full md:w-auto">
            <div className="flex gap-3 flex-1">
              <Image src={profile_nav} alt="profile" />
              <div className=" ">
                <div className="text-sm block md:hidden">Hello,</div>
                <div className="text-[#3A3D42] text-lg font-bold">
                  Robert Chandler
                </div>
                <div className="text-sm hidden md:block">
                  +62 8139 3877 7946
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost rounded-btn">
                <Bell style={{ color: "#4D4B57" }} />
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
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white justify-between h-screen flex-col py-9 rounded-3xl mr-4 md:flex hidden">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]">
                <Grid className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold	text-[#6379F4]">Dashboard</div>
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
                <div className="text-lg font-bold	text-[#3A3D42CC]">Top Up</div>
              </Link>
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
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="h-1/4 bg-[#6379F4] flex rounded-3xl p-6 text-white mb-4">
            <div className="flex-1 flex justify-center flex-col">
              <div className="text-lg">Balance</div>
              <div className="text-4xl font-bold mt-5 mb-2">Rp120.000</div>
              <div className="text-sm font-semibold text-[#DFDCDC]">
                +62 813-9387-7946
              </div>
            </div>
            <div className="md:block hidden">
              <Link
                href="/transfer-search"
                className="flex bg-[#8294F6] p-3 rounded-lg border-white border border-solid"
              >
                <ArrowUp />
                <div className="ml-2">Transfer</div>
              </Link>
              <Link
                href="/topup-search"
                className="flex bg-[#8294F6] p-3 rounded-lg border-white border border-solid mt-3"
              >
                <Plus />
                <div className="ml-2">Top Up</div>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex justify-center gap-3 items-center">
            <Link
              href="/transfer-search"
              className="w-1/2 flex bg-[#EAEDFF] font-bold text-[#514F5B] p-3 rounded-lg border-white border border-solid justify-center"
            >
              <ArrowUp style={{ color: "#608DE2" }} />
              <div className="ml-2">Transfer</div>
            </Link>
            <Link
              href="/topup-search"
              className="w-1/2 flex bg-[#EAEDFF] font-bold text-[#514F5B] p-3 rounded-lg border-white border border-solid justify-center"
            >
              <Plus style={{ color: "#608DE2" }} />
              <div className="ml-2">Top Up</div>
            </Link>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2 bg-white rounded-3xl p-5 hidden md:block">
              <div className="mb-10 flex">
                <div className="flex-1">
                  <ArrowDown style={{ color: "#1EC15F" }} />
                  <div className="text-[#6A6A6A] text-sm my-3">Income</div>
                  <div className="text-[#3A3D42] font-bold lg:text-lg text-md">
                    Rp2.120.000
                  </div>
                </div>
                <div>
                  <ArrowUp style={{ color: "#FF5B37" }} />
                  <div className="text-[#6A6A6A] text-sm my-3">Expense</div>
                  <div className="text-[#3A3D42] font-bold lg:text-lg text-md">
                    Rp1.560.000
                  </div>
                </div>
              </div>
              <div>
                <Image src={graphic} alt="graphic" />
              </div>
            </div>
            <div className="rounded-3xl p-3 w-full md:w-1/2 md:bg-white bg-[#FAFCFF]">
              <div className="flex mb-8 md:mt-0 mt-8 items-center">
                <div className="flex-1 text-[#3A3D42] text-lg font-bold">
                  Transaction History
                </div>
                <Link
                  href="/history"
                  className="text-[#6379F4] font-semibold text-sm"
                >
                  See All
                </Link>
              </div>
              <div className="flex mb-8 bg-[#FFFFFF] md:p-0 p-3 shadow-lg md:shadow-none rounded-md">
                <div className="flex-1">
                  <div className="flex gap-3">
                    <Image src={profile1} alt="profile" />
                    <div className="flex flex-col justify-center">
                      <div className="text-[#4D4B57] sm:text-base text-sm font-bold">
                        Samuel Suhi
                      </div>
                      <div className="text-[#7A7886] text-sm">Accept</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#1EC15F] font-bold sm:text-base text-sm flex items-center">
                  +Rp50.000
                </div>
              </div>
              <div className="flex mb-8 bg-[#FFFFFF] md:p-0 p-3 shadow-lg md:shadow-none rounded-md">
                <div className="flex-1">
                  <div className="flex gap-3">
                    <Image src={logo_Netflix} alt="netflix" />
                    <div className="flex flex-col justify-center">
                      <div className="text-[#4D4B57] sm:text-base text-sm font-bold">
                        Netflix
                      </div>
                      <div className="text-[#7A7886] text-sm">Transfer</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#FF5B37] font-bold sm:text-base text-sm flex items-center">
                  -Rp149.000
                </div>
              </div>
              <div className="flex mb-8 bg-[#FFFFFF] md:p-0 p-3 shadow-lg md:shadow-none rounded-md">
                <div className="flex-1">
                  <div className="flex gap-3">
                    <Image src={profile3} alt="profile" />
                    <div className="flex flex-col justify-center">
                      <div className="text-[#4D4B57] sm:text-base text-sm font-bold">
                        Christine Mar...
                      </div>
                      <div className="text-[#7A7886] text-sm">Accept</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#1EC15F] font-bold sm:text-base text-sm flex items-center">
                  +Rp150.000
                </div>
              </div>
              <div className="flex mb-8 bg-[#FFFFFF] md:p-0 p-3 shadow-lg md:shadow-none rounded-md">
                <div className="flex-1">
                  <div className="flex gap-3">
                    <Image src={logo_Adobe} alt="profile" />
                    <div className="flex flex-col justify-center">
                      <div className="text-[#4D4B57] sm:text-base text-sm font-bold">
                        Robert Chandler
                      </div>
                      <div className="text-[#7A7886] text-sm">Topup</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#FF5B37] font-bold sm:text-base text-sm flex items-center">
                  +Rp249.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#6379F4] px-24 py-5 hidden md:block">
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

export default Home;

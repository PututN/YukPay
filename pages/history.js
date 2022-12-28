import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
  ArrowLeft,
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import profile1 from "../assets/Images/profile1.png";
import logo_Netflix from "../assets/Images/logo_Netflix.png";
import profile3 from "../assets/Images/profile3.png";
import logo_Adobe from "../assets/Images/logo_Adobe.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import NavbarHidden from "../components/NavbarHidden"
import withAuth from "../components/hoc/withAuth";

const History = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <>
    <NavbarHidden />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white justify-between h-screen flex-col py-9 rounded-3xl mr-4 hidden md:flex">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]">
                <Grid className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold	text-[#6379F4]">Dashboard</div>
              </div>
            </Link>
            <Link href="/transfer-search">
              <div className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </div>
            </Link>
            <Link href="/topup-search">
              <div className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Top Up</div>
              </div>
            </Link>
            <Link href="/profile">
              <div className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
              </div>
            </Link>
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
            href="/home"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              History
            </div>
          </Link>
          <div className="items-center mb-12 md:flex hidden">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transaction History
            </div>
            <select className="bg-[#3A3D421A] py-2 px-6 rounded-lg">
              <option>-- Select Filter --</option>
              <option></option>
            </select>
          </div>
          <div className="text-[#7A7886] text-base mb-8 block md:hidden">
            This Week
          </div>
          <div className="flex mb-8 bg-white p-3 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold md:text-base text-sm flex items-center">
              +Rp50.000
            </div>
          </div>
          <div className="flex mb-8 bg-white p-3 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={logo_Netflix} alt="netflix" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Netflix
                  </div>
                  <div className="text-[#7A7886] text-sm">Transfer</div>
                </div>
              </div>
            </div>
            <div className="text-[#FF5B37] font-bold md:text-base text-sm flex items-center">
              -Rp149.000
            </div>
          </div>
          <div className="text-[#7A7886] text-base mb-8 block md:hidden">
            This Month
          </div>
          <div className="flex mb-8 bg-white p-3 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile3} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Christine Mar...
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold md:text-base text-sm flex items-center">
              +Rp150.000
            </div>
          </div>
          <div className="flex mb-8 bg-white p-3 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={logo_Adobe} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Robert Chandler
                  </div>
                  <div className="text-[#7A7886] text-sm">Topup</div>
                </div>
              </div>
            </div>
            <div className="text-[#FF5B37] font-bold md:text-base text-sm flex items-center">
              +Rp249.000
            </div>
          </div>
          <div className="md:flex mb-8 hidden">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold md:text-base text-sm flex items-center">
              +Rp50.000
            </div>
          </div>
          <div className="md:flex mb-8 hidden">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] md:text-base text-sm font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold md:text-base text-sm flex items-center">
              +Rp50.000
            </div>
          </div>
          <div className="flex md:hidden gap-3 items-center justify-center">
            <div className="bg-white rounded-md p-3 shadow-lg">
              <ArrowUp className="text-[#FF5B37]" />
            </div>
            <div className="bg-white rounded-md p-3 shadow-lg">
              <ArrowDown className="text-[#1EC15F]" />
            </div>
            <div className="bg-white rounded-md py-3 px-6 shadow-lg text-[#6379F4] text-lg font-bold">
              Filter by Date
            </div>
          </div>
        </div>
      </section>
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

export default withAuth(History);

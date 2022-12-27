import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
  Search,
  ArrowLeft,
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import Link from "next/link";
import profile1 from "../assets/Images/profile1.png";
import profile2 from "../assets/Images/profile2.png";
import profile4 from "../assets/Images/profile4.png";
import profile5 from "../assets/Images/profile5.png";
import profile3 from "../assets/Images/profile3.png";
import profile6 from "../assets/Images/profile6.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { useRouter } from "next/router";
import NavbarHidden from "../components/NavbarHidden";

const Transfer_Search = () => {
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
        <div className="w-full md:w-3/4 bg-[#FAFCFF] md:bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <Link
            href="/home"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Find Receiver
            </div>
          </Link>
          <div className="items-center mb-5 hidden md:flex">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Search Receiver
            </div>
          </div>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search receiver here"
              className="w-full relative px-14 py-3 bg-[#3A3D421A] rounded-lg"
            ></input>
            <Search
              className="absolute top-[27%] left-[2.5%]"
              style={{ color: "#A9A9A9" }}
            />
          </div>
          <div className="block md:hidden text-[#514F5B] text-lg font-bold mb-3">
            Quick Access
          </div>
          <div className="gap-3 flex md:hidden">
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image src={profile3} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Michi</div>
                <div className="text-[#7A7886] text-sm">-9994</div>
              </div>
            </Link>
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image src={profile2} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Dody</div>
                <div className="text-[#7A7886] text-sm">-3561</div>
              </div>
            </Link>
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image src={profile6} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Rian</div>
                <div className="text-[#7A7886] text-sm">-3822</div>
              </div>
            </Link>
          </div>
          <div className="block md:hidden text-[#514F5B] text-lg font-bold mb-3">
            All Contacts{" "}
          </div>
          <div className="text-[#8F8F8F] text-sm	block md:hidden mb-3">
            17 Contact Founds
          </div>

          <Link
            href="/transfer-input"
            className="flex mb-8 shadow-md p-3 bg-white rounded-lg"
          >
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
          </Link>
          <Link
            href="/transfer-input"
            className="flex mb-8 shadow-md p-3 bg-white rounded-lg"
          >
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile4} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Jessica Keen
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    +62 811-3452-5252
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/transfer-input"
            className="flex mb-8 shadow-md p-3 bg-white rounded-lg"
          >
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile5} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Michael Le
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    +62 810-4224-4613
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/transfer-input"
            className="flex mb-8 shadow-md p-3 bg-white rounded-lg"
          >
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    +62 813-8492-9994
                  </div>
                </div>
              </div>
            </div>
          </Link>
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

export default Transfer_Search;

import {
  Grid,
  ArrowUp,
  Plus,
  User,
  Bell,
  LogOut,
  ArrowDown,
} from "react-feather";
import Image from "next/image";
import profile_nav from "../assets/Images/profile_nav.png";
import profile1 from "../assets/Images/profile1.png";
import logo_Netflix from "../assets/Images/logo_Netflix.png";
import profile3 from "../assets/Images/profile3.png";
import logo_Adobe from "../assets/Images/logo_Adobe.png";
import Link from "next/link";

const History = () => {
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
                    <div className="text-[#7A7A7A] text-sm">Accept from Joshua Lee</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp220.000</div>
                    <ArrowDown style={{color:"#4CEDB3"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Deni</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp149.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Deni</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp149.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Transfer to Jessica Lee</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp100.000</div>
                    <ArrowUp style={{color:"#FF5B37"}} className="absolute top-[35%] left-[5%]"/>
                  </div>
                </li>
                <li>
                  <div className="relative flex flex-col pl-10 items-start">
                    <div className="text-[#7A7A7A] text-sm">Top up</div>
                    <div className="text-lg font-bold text-[#43484F]">Rp300.000</div>
                    <ArrowDown style={{color:"#4CEDB3"}} className="absolute top-[35%] left-[5%]"/>
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
            <div className="flex w-full">
              <div className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#6379F4]">
                <Grid className="mr-6" style={{ color: "#6379F4" }} />
                <div className="text-lg font-bold	text-[#6379F4]">Dashboard</div>
              </div>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </div>
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
            <div className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6">
          <div className="flex items-center mb-12">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transaction History
            </div>
            <select className="bg-[#3A3D421A] py-2 px-6 rounded-lg">
              <option>-- Select Filter --</option>
              <option></option>
            </select>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold text-base flex items-center">
              +Rp50.000
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={logo_Netflix} alt="netflix" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Netflix
                  </div>
                  <div className="text-[#7A7886] text-sm">Transfer</div>
                </div>
              </div>
            </div>
            <div className="text-[#FF5B37] font-bold text-base flex items-center">
              -Rp149.000
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile3} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Christine Mar...
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold text-base flex items-center">
              +Rp150.000
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={logo_Adobe} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Robert Chandler
                  </div>
                  <div className="text-[#7A7886] text-sm">Topup</div>
                </div>
              </div>
            </div>
            <div className="text-[#FF5B37] font-bold text-base flex items-center">
              +Rp249.000
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold text-base flex items-center">
              +Rp50.000
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile1} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Samuel Suhi
                  </div>
                  <div className="text-[#7A7886] text-sm">Accept</div>
                </div>
              </div>
            </div>
            <div className="text-[#1EC15F] font-bold text-base flex items-center">
              +Rp50.000
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

export default History;

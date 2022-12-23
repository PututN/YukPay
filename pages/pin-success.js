import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import Image from "next/image";
import Link from "next/link";

const PinSuccess = () => {
  return (
    <>
      <div className="flex m-0 h-screen">
        {/* container left */}
        <div className="w-1/2 bg-[#B1B2FF] px-12 py-5 h-screen text-white relative h-screen overflow-y-scroll">
          <div className="font-bold	text-3xl">YukPay</div>
          <Image src={line} alt="line" className="absolute top-[0] left-[0]" />
          <Image src={phone} alt="Image"></Image>
          <div className="font-bold	text-2xl">
            App that Covering Banking Needs.
          </div>
          <div className="text-base	h-screen">
            Yukpay is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Yukpay everyday with worldwide
            users coverage.
          </div>
        </div>
        {/* container right */}
        <div className="w-1/2 px-12 py-20 bg-[#FAFCFF] h-screen overflow-y-scroll">
          <div className="font-bold	text-xl mb-10">
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </div>
          <div className="text-base	mb-5">
            Create 6 digits pin to secure all your money and your data in
            FazzPay app. Keep it secret and don’t tell anyone about your FazzPay
            account password and the PIN.
          </div>
          <form>
            <div className="flex text-center w-full mb-10">
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md outline-none appearance-none"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md appearance-none	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md appearance-none	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md appearance-none"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md appearance-none	"
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  max="9"
                  className="w-12 text-center p-5 rounded-md appearance-none	"
                ></input>
              </div>
            </div>

            <button className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold">
              Confirm
            </button>
          </form>

          <div className="text-center text-base	mt-6">
            Don’t have an account? Let’s{" "}
            <Link href="#" className="text-[#6379F4]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinSuccess;

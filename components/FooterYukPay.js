import { Link } from "next/link";

const FooterYukPay = () => {
  return (
    <div className="bg-[#6379F4] px-24 py-5 md:block hidden">
      <div className="hidden">
        <Link href="/" className="text-white text-3xl">
          YukPay
        </Link>
        <div className="w-60 text-white mt-10">
          <p>
            Simplify financial needs and saving much time in banking needs with
            one single app.
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
    </div>
  );
};

export default FooterYukPay;

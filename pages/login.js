import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import { Mail, Lock, EyeOff, Eye } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router"
import {LoginAction} from "../redux/actions/authAction"


YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "Min uppercase 1")
    .minNumbers(1, "Min numbers 1")
    .minSymbols(1, "Min symbol 1"),
});

const Login = () => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const router = useRouter()
  const dispatch = useDispatch();
  const { error, loading, token } = useSelector((state) => state.auth);
  console.log(token)
  const handleSubmit = (value) => {
    const firstName = value.firstName;
    const lastName = value.lastName;
    const email = value.email;
    const password = value.password;
    dispatch(LoginAction({ firstName, lastName, email, password, cb: () => router.push("/home")
    }));
  };

  return (
    <>
      <div className="flex m-0 h-screen">
        {/* container left */}
        <div className="w-1/2 bg-[#B1B2FF] px-12 py-5 h-screen text-white relative overflow-y-scroll hidden md:block">
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
        <div className="w-full md:w-1/2 md:px-12 px-0 md:py-20 pb-0 pt-20 bg-[#FAFCFF] h-screen overflow-y-scroll ">
          <div className="block md:hidden text-xl font-bold text-center text-[#B1B2FF] mb-10">
            YukPay
          </div>
          <div className="bg-white rounded-t-3xl md:bg-[#FAFCFF] md:text-left text-center md:px-0 px-2 md:py-0 py-5">
            <div className="font-bold	text-xl mb-10 hidden md:block">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </div>
            <div className="font-bold	text-xl mb-10 block md:hidden">Login</div>
            <div className="text-base	mb-5 text-[#3A3D4299] hidden md:block">
              Transfering money is eassier than ever, you can access YukPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] block md:hidden">
              Login to your existing account to access all the features in
              YukPay.
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="relative mb-5 bg-[#FAFCFF] focus:border-[#6379F4]">
                    <Field
                      name="email"
                      type="email"
                      className="w-full border-b-2 focus:outline-none px-12 py-3 md:bg-[#FAFCFF] bg-white focus:border-[#6379F4] peer"
                      placeholder="Enter your e-mail"
                    ></Field>
                    {errors.email && touched.email ? (
                      <div className="text-red-900">{errors.email}</div>
                    ) : null}
                    <Mail className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]" />
                  </div>
                  <div className="relative">
                    <Field
                      name="password"
                      type={type}
                      className="py-3 px-12 w-full md:bg-[#FAFCFF] bg-white border-b-2 focus:outline-none focus:border-[#6379F4] peer"
                      placeholder="Enter your password"
                    ></Field>
                    {errors.password && touched.password ? (
                      <div className="text-red-900">{errors.password}</div>
                    ) : null}
                    <Lock className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]" />
                    {type === "password" ? (
                      <EyeOff
                        className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#6379F4] text-[#A9A9A999]"
                        // style={{ color: "#A9A9A999" }}
                        onClick={showPassword}
                      />
                    ) : (
                      <Eye
                        className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#6379F4] text-[#A9A9A999]"
                        // style={{ color: "#A9A9A999" }}
                        onClick={showPassword}
                      />
                    )}
                  </div>
                  <Link
                    href="#"
                    className="justify-end	flex text-sm font-semibold my-6"
                  >
                    Forgot password?
                  </Link>
                  {error && (
                  <div className="text-[#FF5B37] font-semibold text-lg text-center my-3">
                    {error}
                  </div>
                  )}
                  <button
                    type="submit"
                    disabled={!dirty ||loading}
                    className="w-full bg-[#B1B2FF] rounded-md py-3 text-lg font-bold text-white"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <div className="text-center text-base	mt-6">
              Don’t have an account? Let’s{" "}
              <Link href="/sign-up" className="text-[#6379F4]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

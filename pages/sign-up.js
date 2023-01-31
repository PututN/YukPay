import phone from "../assets/Images/phone.png";
import line from "../assets/Images/line.png";
import { Mail, Lock, EyeOff, Eye, User } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Formik, Form, Field } from "formik";
import { SignupAction } from "../redux/actions/authAction";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

YupPassword(Yup);

const RegisterEmployeeSchema = Yup.object().shape({
  // userName: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Email not valid").required("Email must filled"),
  password: Yup.string()
    .required("Required")
    .min(6, "Min 6 character")
    .minLowercase(1, "Min 1 lowercase")
    .minUppercase(1, "Min 1 uppercase")
    .minNumbers(1, "Min 1 number")
    .minSymbols(1, "min 1 symbol"),
});

const SignUp = () => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const { error, loading, token } = useSelector((state) => state.auth);
  const handleSubmit = (value) => {
    const firstName = value.firstName;
    const lastName = value.lastName;
    const email = value.email;
    const password = value.password;
    dispatch(
      SignupAction({
        firstName,
        lastName,
        email,
        password,
        cb: () => router.replace("/pin-blank"),
      })
    );
  };
  React.useEffect(() => {
    if (token) {
      router.replace("/pin-blank");
    }
  }, [token]);

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
            <div className="font-bold	text-xl mb-10 block md:hidden">
              Sign Up
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] hidden md:block">
              Transfering money is eassier than ever, you can access YukPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </div>
            <div className="text-base	mb-5 text-[#3A3D4299] block md:hidden">
              Create your account to access YukPay.
            </div>
            <Formik
              initialValues={{
                userName: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={RegisterEmployeeSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="md:hidden block relative mb-5">
                    <Field
                      name="userName"
                      type="text"
                      className="w-full border-b-2 focus:outline-none focus:border-[#6379F4] peer  px-12 py-3 md:bg-[#FAFCFF] bg-white"
                      placeholder="Enter your username"
                    ></Field>
                    <User className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]" />
                  </div>

                  <div className="md:block hidden">
                    <div className=" relative mb-5">
                      <Field
                        name="firstName"
                        type="text"
                        className="w-full border-b-2 focus:outline-none focus:border-[#6379F4] peer  px-12 py-3 bg-[#FAFCFF]"
                        placeholder="Enter your firstname"
                      ></Field>
                      {errors.firstName && touched.firstName ? (
                        <div className="text-[#FF5B37] font-semibold">
                          {errors.firstName}
                        </div>
                      ) : null}
                      <User
                        // style={{ color: "#A9A9A999" }}
                        className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]"
                      />
                    </div>
                    <div className=" relative mb-5">
                      <Field
                        name="lastName"
                        type="text"
                        className="w-full border-b-2 focus:outline-none focus:border-[#6379F4] peer px-12 py-3 bg-[#FAFCFF]"
                        placeholder="Enter your lastname"
                      ></Field>
                      {errors.lastName && touched.lastName ? (
                        <div className="text-[#FF5B37] font-semibold">
                          {errors.lastName}
                        </div>
                      ) : null}
                      <User
                        // style={{ color: "#A9A9A999" }}
                        className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]"
                      />
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <Field
                      name="email"
                      type="email"
                      className="w-full border-b-2 focus:outline-none focus:border-[#6379F4] peer px-12 py-3 md:bg-[#FAFCFF] bg-white"
                      placeholder="Enter your e-mail"
                    ></Field>
                    {errors.email && touched.email ? (
                      <div className="text-[#FF5B37] font-semibold">
                        {errors.email}
                      </div>
                    ) : null}
                    <Mail
                      // style={{ color: "#A9A9A999" }}
                      className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]"
                    />
                  </div>
                  <div className="relative mb-5">
                    <Field
                      name="password"
                      type={type}
                      className="py-3 px-12 md:bg-[#FAFCFF] bg-white w-full border-b-2 focus:outline-none focus:border-[#6379F4] peer"
                      placeholder="Enter your password"
                    ></Field>
                    {errors.password && touched.password ? (
                      <div className="text-[#FF5B37] font-semibold">
                        {errors.password}
                      </div>
                    ) : null}
                    <Lock
                      // style={{ color: "#A9A9A999" }}
                      className="absolute top-[23%] peer-focus:text-[#6379F4] text-[#A9A9A999]"
                    />
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
                  {error && (
                    <div className="text-[#FF5B37] font-semibold text-lg text-center my-3">
                      {error}
                    </div>
                  )}

                  <button
                    disabled={!dirty || loading}
                    className="w-full bg-[#6379F4] btn rounded-md py-3 text-lg font-bold text-white"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>

            <div className="text-center text-base	mt-6">
              Already have an account? Let’s{" "}
              <Link href="/login" className="text-[#6379F4]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

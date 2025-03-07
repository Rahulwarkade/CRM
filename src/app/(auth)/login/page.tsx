import { Icons } from "@/assets/icons";
import Image from "next/image";
import React from "react";

/**
 * The `Login` component renders the login page for the ToneOp Eats CRM application.
 * It includes a welcome message, a login form, and a logo.
 *
 * @returns {JSX.Element} The JSX code for the login page.
 */
const Login = () => {
  return (
    <section className="w-full h-screen relative bg-opacity-50 bg-gradient-to-b from-blue-e5e5e583 to-blue-81b8ff85 px-[5%] md:px-[8%] flex flex-col items-center justify-center">
      <h1 className="text-xl text-[2rem] 2xl:text-[3.75rem] text-[#000000] text-center">
        Welcome to ToneOp Eats CRM
      </h1>
      {/* Login Component */}
      <div className="w-3/5 relative bg-blue-ffffff59 rounded-[2.5rem] p-[5%]  mt-[30px] 2xl:mt-[60px]">
        {/* Login Cardiential form*/}
        <form action="" className="w-full  flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center">
            <h1 className="text-[2rem] text-[#000000] text-center">
              Login to your account!
            </h1>
            {/* Login accont Logo */}
            <div className="size-[140px] rounded-full overflow-hidden relative mt-[50px]">
              <Image src={Icons.Login} width={140} height={140} alt="user" />
            </div>

            {/* Email input  */}
            <div className="w-full max-w-[507px] h-[56px] relative rounded-[28px] mt-[50px]">
              <span className="absolute top-1/2 -translate-y-1/2 right-6">
                <Image src={Icons.Mail} width={20} height={20} alt="Mail" />
              </span>
              <input
                className="w-full h-full rounded-[28px] bg-blue-d9ecff outline-none px-6 py-[18px] placeholder:text-base placeholder:text-[#787878]"
                placeholder="Enter Email Id"
                type="email"
              />
            </div>
            {/* Password Input */}
            <div className="w-full max-w-[507px] h-[56px] relative rounded-[28px] mt-4">
              <span className="absolute top-1/2 -translate-y-1/2 right-6">
                <Image src={Icons.View} width={20} height={20} alt="View" />
              </span>
              <input
                className="w-full h-full rounded-[28px] bg-blue-d9ecff outline-none px-6 py-[18px] placeholder:text-base placeholder:text-[#787878]"
                placeholder="Enter Password"
                type="password"
              />
            </div>
          </div>
          {/* Submit Button for OTP */}
          <div className="w-full max-w-[507px] h-[56px mt-[80px]">
            <button
              type="submit"
              className="w-full h-full rounded-[28px] bg-blue-3e91ff text-white text-base font-semibold outline-none px-6 py-[18px] shadow-[0_4px_10px_#00000040]"
            >
              Get OTP
            </button>
          </div>
        </form>
      </div>

      {/* popup overlay */}
      <div className={`w-full h-full  absolute bg-overlay-00000040 backdrop-blur-sm flex justify-center items-center hidden`}>
        {/* OTP POPUP */}
        <div className="w-full max-w-[760px] h-full max-h-[508px] bg-blue-ffffff80 rounded-[40px] px-[2.5rem] flex flex-col items-center gap-[40px] justify-center">
          {/* OTP Logo */}
          <div className="min-w-[140px] min-h-[140px] rounded-full overflow-hidden relative  bg-blue-ffffff80 flex justify-center items-center">
            <Image
              src={Icons.Verification}
              width={80}
              height={80}
              alt="user"
            />
          </div>
          <h2 className="text-3xl text-[#000000] text-center">Enter OTP sent to your mail</h2>

          <div className="w-full relative flex gap-4">
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
            <span className="size-[100px] rounded-3xl bg-blue-ffffff50"></span>
          </div>

          <button className="text-blue-3e91ff text-2xl text-center">Resend OTP</button>
        </div>
      </div>
    </section>
  );
};

export default Login;

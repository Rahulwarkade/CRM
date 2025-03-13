"use client";

import React, { useState } from "react";
import { Icons } from "@/assets/icons";
import Image from "next/image";
import { Button, Input, Container, Text } from "@/components";

const Login: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);

  const handleGetOtp = () => {
    setShowOtp(true);
  };

  return (
    <Container
      maxWidth="full"
      className="h-screen relative bg-opacity-50 bg-gradient-to-b from-blue-e5e5e583 to-blue-81b8ff85 flex flex-col items-center justify-center"
      padding="xl"
    >
      <Text variant="h1" size="4xl" className="text-[#000000] text-center">
        Welcome to ToneOp Eats CRM
      </Text>

      <Container
        maxWidth="none"
        className="w-3/5 bg-blue-ffffff59 rounded-[2.5rem] mt-[30px] 2xl:mt-[60px]"
        padding="xl"
      >
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleGetOtp}
        >
          <Container
            maxWidth="none"
            className="w-full flex flex-col items-center"
            padding="none"
          >
            <Text
              variant="h2"
              size="2xl"
              className="text-[#000000] text-center"
            >
              Login to your account!
            </Text>

            <Container
              maxWidth="none"
              className="size-[80px] 2xl:size-[140px] rounded-full overflow-hidden relative mt-[20px] 2xl:mt-[50px]"
              padding="none"
            >
              <Image src={Icons.Login} width={140} height={140} alt="user" />
            </Container>

            <Container
              maxWidth="none"
              className="w-full max-w-[507px] mt-[20px] 2xl:mt-[50px] space-y-4"
              padding="none"
            >
              <div className="relative h-[56px]">
                <Input
                  type="email"
                  placeholder="Enter Email Id"
                  classname="w-full h-full rounded-[28px] bg-blue-d9ecff px-6 py-[18px]"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-6">
                  <Image src={Icons.Mail} width={20} height={20} alt="Mail" />
                </span>
              </div>

              <div className="relative h-[56px]">
                <Input
                  type="password"
                  placeholder="Enter Password"
                  classname="w-full h-full rounded-[28px] bg-blue-d9ecff px-6 py-[18px]"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-6">
                  <Image src={Icons.View} width={20} height={20} alt="View" />
                </span>
              </div>
            </Container>

            <Container
              maxWidth="none"
              className="w-full max-w-[507px] mt-[40px] 2xl:mt-[80px]"
              padding="none"
            >
              <Button
                textValue="Get OTP"
                type="submit"
                className="bg-blue-3e91ff hover:bg-blue-4f9fff"
              />
            </Container>
          </Container>
        </form>
      </Container>

      {showOtp && (
        <Container
          maxWidth="full"
          className="h-full absolute bg-overlay-00000040 backdrop-blur-sm flex justify-center items-center"
          padding="none"
        >
          <Container
            maxWidth="none"
            className="w-full max-w-[760px] h-full max-h-[508px] bg-blue-ffffff80 rounded-[40px] flex flex-col items-center gap-[40px] justify-center"
            padding="xl"
          >
            <Container
              maxWidth="none"
              className="min-w-[140px] min-h-[140px] rounded-full overflow-hidden relative bg-blue-ffffff80 flex justify-center items-center"
              padding="none"
            >
              <Image
                src={Icons.Verification}
                width={80}
                height={80}
                alt="user"
              />
            </Container>

            <Text
              variant="h2"
              size="3xl"
              className="text-[#000000] text-center"
            >
              Enter OTP sent to your mail
            </Text>

            <Container
              maxWidth="none"
              className="w-full relative flex gap-4"
              padding="none"
            >
              {[...Array(6)].map((_, index) => (
                <span
                  key={index}
                  className="size-[100px] rounded-3xl bg-blue-ffffff50"
                />
              ))}
            </Container>

            <Button
              textValue="Resend OTP"
              type="button"
              className="text-blue-3e91ff hover:text-blue-4f9fff"
            />
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Login;

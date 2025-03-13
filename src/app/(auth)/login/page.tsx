import React from "react";
import { Container } from "@/components/common";
import { Login } from "@/components";

const Page = () => {
  return (
    <Container
      maxWidth="full"
      padding="none"
      className="w-full h-screen relative"
    >
      <Login />
    </Container>
  );
};

export default Page;

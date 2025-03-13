import React from "react";
import { Container } from "@/components/common";
import { DashboardLayout } from "@/components";

const Profile = () => {
  return (
    <Container
      maxWidth="full"
      padding="none"
      className="w-full min-h-dvh relative bg-opacity-50 bg-gradient-to-b from-blue-e5e5e583 to-blue-81b8ff85 px-[5%] md:px-[8%] py-[40px]"
    >
      <DashboardLayout/>
    </Container>
  );
};

export default Profile;

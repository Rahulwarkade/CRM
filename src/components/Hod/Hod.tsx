import React from "react";
import { DashboardLayout, Container } from "@/components";

const Hod: React.FC = () => {
  return (
    <Container
      maxWidth="full"
      className="min-h-dvh relative bg-opacity-50 bg-gradient-to-b from-blue-e5e5e583 to-blue-81b8ff85"
      padding="xl"
    >
      <DashboardLayout />
    </Container>
  );
};

export default Hod;

import React from "react";
import {
  ActionPanel,
  BreadcrubNav,
  UserProfileCard,
  Container,
} from "@/components";

const Header: React.FC = () => {
  return (
    <Container
      maxWidth="full"
      className="relative flex justify-between items-center"
      padding="none"
    >
      <UserProfileCard />
      <BreadcrubNav />
      <ActionPanel />
    </Container>
  );
};

export default Header;

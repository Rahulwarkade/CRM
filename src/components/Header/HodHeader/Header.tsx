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
      className="relative flex items-center justify-between"
      padding="none"
      centered={false}
    >
      <UserProfileCard />
      <BreadcrubNav />
      <ActionPanel />
    </Container>
  );
};

export default Header;

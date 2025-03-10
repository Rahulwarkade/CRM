import React from "react";
import { ActionPanel, BreadcrubNav, UserProfileCard } from "@/components";

const Header = () => {
  return (
    <>
      <div className="w-full relative flex justify-between items-center">
        <UserProfileCard />
        <BreadcrubNav />
        <ActionPanel />
      </div>
    </>
  );
};

export default Header;

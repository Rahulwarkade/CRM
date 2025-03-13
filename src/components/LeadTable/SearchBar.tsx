import { Icons } from "@/assets/icons";
import React from "react";
import { Container, Image, Input } from "@/components/common";

const SearchBar = () => {
  return (
    <Container
      maxWidth="none"
      className="w-full 2xl:max-w-[400px] h-[58px] rounded-[28px] bg-blue-ffffff59 relative"
      padding="none"
    >
      <Container
        maxWidth="none"
        className="absolute top-1/2 -translate-y-1/2 right-6"
        padding="none"
      >
        <Image
          src={Icons.searchNormal.src}
          width={20}
          height={20}
          alt="Search"
        />
      </Container>
      <Input
        className="w-full h-full relative py-[18px] px-6 outline-none placeholder:text-xs 2xl:placeholder:text-base placeholder:text-gray-787878"
        type="text"
        placeholder="Search lead by name or number"
      />
    </Container>
  );
};

export default SearchBar;

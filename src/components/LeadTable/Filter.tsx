import { Icons } from "@/assets/icons";
import React from "react";
import { Container, Image, Input } from "@/components/common";

const Filter = () => {
  return (
    <Container
      maxWidth="none"
      className="w-full max-w-[163px] h-[58px] rounded-[28px] bg-blue-ffffff59 relative"
      padding="none"
    >
      <Container
        maxWidth="none"
        className="absolute top-1/2 -translate-y-1/2 right-6"
        padding="none"
      >
        <Image src={Icons.arrowDown.src} width={20} height={20} alt="Filter" />
      </Container>
      <Input
        className="w-full h-full relative py-[18px] px-6 outline-none placeholder:text-xs 2xl:placeholder:text-base placeholder:text-gray-787878"
        type="text"
        placeholder="Filter Date"
      />
    </Container>
  );
};

export default Filter;

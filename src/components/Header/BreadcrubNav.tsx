import { Icons } from "@/assets/icons";
import React from "react";
import { Container, Text, Image } from "@/components/common";

const BreadcrubNav = () => {
  return (
    <Container maxWidth="none" className="text-center w-fit" padding="none">
      <Text
        variant="h3"
        weight="semibold"
        className="text-[1rem] 2xl:text-[2rem] text-[#000000]"
      >
        Home
      </Text>
      <Container
        maxWidth="none"
        className="flex gap-4 items-center"
        padding="none"
      >
        <Text
          variant="span"
          className="text-base 2xl:text-2xl text-black-414141 capitalize"
        >
          Home
        </Text>
        <Image src={Icons.arrowRight.src} width={24} height={24} alt="back" />
        <Text
          variant="span"
          className="text-base 2xl:text-2xl text-black-414141 capitalize"
        >
          Fresh Leads
        </Text>
      </Container>
    </Container>
  );
};

export default BreadcrubNav;

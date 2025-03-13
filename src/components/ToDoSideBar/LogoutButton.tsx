import { Icons } from "@/assets/icons";
import React from "react";
import { Container, Text, Image } from "@/components/common";

const LogoutButton: React.FC = () => {
  return (
    <Container
      maxWidth="none"
      className="w-full max-w-[195px] h-[53px] rounded-2xl p-4 flex gap-[10px] bg-blue-ffffff59 text-red-e52c42"
      padding="none"
    >
      <Image src={Icons.lougOut1.src} alt="logout" width={20} height={20} />
      <Text variant="p" className="text-sm 2xl:text-base text-red-e52c42">
        Log Out
      </Text>
    </Container>
  );
};

export default LogoutButton;

import { Icons } from "@/assets/icons";
import React from "react";
import { Container, Text, Image } from "@/components/common";

const SettingMenu: React.FC = () => {
  return (
    <Container
      maxWidth="none"
      className="w-full max-w-[195px] h-[53px] rounded-2xl p-4 flex gap-[10px] bg-blue-ffffff59"
      padding="none"
    >
      <Image src={Icons.settings2.src} alt="settings" width={20} height={20} />
      <Text variant="p" className="text-sm 2xl:text-base text-gray-787878">
        Settings
      </Text>
    </Container>
  );
};

export default SettingMenu;

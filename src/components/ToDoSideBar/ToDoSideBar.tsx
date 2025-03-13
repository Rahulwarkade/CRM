import { Icons } from "@/assets/icons";
import React from "react";
import { LogoutButton, SettingMenu, ToDoListItem } from "@/components";
import { Container, Text } from "@/components/common";

const ToDoSideBar = () => {
  return (
    <Container
      maxWidth="none"
      className="relative flex flex-col justify-between"
      padding="none"
    >
      <Container maxWidth="none" padding="none">
        <Text
          variant="h3"
          weight="medium"
          className="text-sm 2xl:text-xl text-black-000000 capitalize"
        >
          To-Do List
        </Text>

        <Container
          maxWidth="none"
          className="w-full relative flex flex-col gap-4 mt-6"
          padding="none"
        >
          {[
            { icon: Icons.userEdit, textValue: "Fresh Leads", stats: 18 },
            { icon: Icons.userEdit, textValue: "Follow Ups", stats: 16 },
            { icon: Icons.userEdit, textValue: "Assigned", stats: 16 },
            { icon: Icons.userEdit, textValue: "Pending", stats: 16 },
            { icon: Icons.userEdit, textValue: "Performance", stats: 18 },
          ].map((lead, index) => {
            return (
              <ToDoListItem key={`leads${index}`} lead={lead} index={index} />
            );
          })}
        </Container>
      </Container>

      {/* Controllers => SettingsMenu and LogoutButton */}
      <Container
        maxWidth="none"
        className="relative flex flex-col gap-4"
        padding="none"
      >
        <SettingMenu />
        <LogoutButton />
      </Container>
    </Container>
  );
};

export default ToDoSideBar;

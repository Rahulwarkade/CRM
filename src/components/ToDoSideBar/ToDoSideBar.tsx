import { Icons } from "@/assets/icons";
import React from "react";
import { LogoutButton, SettingMenu, ToDoListItem } from "@/components";

const ToDoSideBar = () => {
  return (
    <>
      {/* To Do List */}
      <div className="relative flex flex-col justify-between ">
        <div>
        <h3 className="text-sm 2xl:text-xl text-black-000000 capitalize font-medium">
          To-Do List
        </h3>

        <div className="w-full relative flex flex-col gap-4 mt-6">
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
        </div>
        </div>

        {/* Controloers => SettingsMenu and LogoutButton */}
        <div className="relative flex flex-col gap-4">
          <SettingMenu />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default ToDoSideBar;

import React from "react";
import { Container, Text, Button } from "@/components/common";

const ActionPanel = () => {
  return (
    <Container
      maxWidth="none"
      className="w-[358px] relative rounded-[40px] bg-blue-ffffff59 px-4 py-[27px] flex flex-col gap-2 2xl:gap-6"
      padding="none"
    >
      {/* Action Button */}
      <Container
        maxWidth="none"
        className="w-full relative flex gap-2 2xl:gap-4"
        padding="none"
      >
        {/* View Report Data */}
        <Button
          className="w-[155px] h-[48px] rounded-full border border-blue-3e91ff bg-blue-ffffffb2 text-sm 2xl:text-base font-medium"
          variant="outline"
        >
          View Report Data
        </Button>
        {/* Assign Target */}
        <Button
          className="w-[155px] h-[48px] rounded-full border border-blue-3e91ff bg-blue-3e91ff text-white text-sm 2xl:text-base font-medium"
          variant="primary"
        >
          Assign Target
        </Button>
      </Container>
      {/* Toggler Button */}
      <Container
        maxWidth="none"
        className="w-full relative flex gap-6 justify-center"
        padding="none"
      >
        <Text
          variant="span"
          className="text-sm 2xl:text-base text-blue-3e91ff font-medium"
        >
          Auto-Assign
        </Text>
        <Container maxWidth="none" className="flex gap-2" padding="none">
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-gray-b7b7b7 font-medium"
          >
            Off
          </Text>
          <Container
            maxWidth="none"
            className="w-[40px] h-6 rounded-full bg-blue-3e91ff relative flex items-center"
            padding="none"
          >
            <div className="size-4 rounded-full bg-white absolute right-0.5"></div>
          </Container>
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-blue-3e91ff font-medium"
          >
            On
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default ActionPanel;

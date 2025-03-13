import React from "react";
import { Container, Text, Image } from "@/components/common";

interface Lead {
  icon: string;
  textValue: string;
  stats: number;
}

interface ToDoListItemProps {
  lead: Lead;
  index: number;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ lead, index }) => {
  return (
    <Container
      maxWidth="none"
      className={`max-w-[216px] ${
        index == 0 ? "h-[80px] p-4 bg-blue-ffffff59" : "h-auto"
      } rounded-3xl flex gap-[10px] items-center`}
      padding="none"
    >
      {/* Icon */}
      <Container
        maxWidth="none"
        className="min-w-[48px] min-h-[48px] rounded-full bg-white relative flex justify-center items-center"
        padding="none"
      >
        <Image src={lead.icon} width={24} height={24} alt="assign" />
      </Container>
      <Text
        variant="p"
        className="text-sm 2xl:text-base text-black-000000 font-medium capitalize text-nowrap"
      >
        {lead.textValue}
        <Text variant="span"> ({lead.stats.toString()})</Text>
      </Text>
    </Container>
  );
};

export default ToDoListItem;

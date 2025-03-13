import { Icons } from "@/assets/icons";
import React from "react";
import { AgentListItem } from "@/components";
import { Container, Text } from "@/components/common";

const AgentSideBar = () => {
  return (
    <Container
      maxWidth="none"
      className="min-w-[358px] rounded-[40px] bg-blue-ffffff59 p-6"
      padding="none"
    >
      <Container
        maxWidth="none"
        className="w-full relative flex justify-between items-center"
        padding="none"
      >
        <Text
          variant="h3"
          weight="medium"
          className="text-base 2xl:text-xl text-black-000000 capitalize"
        >
          Agents
        </Text>
        <Text variant="p" className="text-sm 2xl:text-base text-blue-3e91ff">
          View All
        </Text>
      </Container>

      <Container
        maxWidth="none"
        className="w-full relative flex flex-col gap-[40px] mt-[30px]"
        padding="none"
      >
        {[
          {
            pic: Icons.Add,
            agentName: "Jason",
            designation: "Sales Agent, Bhopal",
            assigned: 14,
            pending: 1,
          },
          {
            pic: Icons.Add,
            agentName: "Jason",
            designation: "Sales Agent, Bhopal",
            assigned: 14,
            pending: 1,
          },
          {
            pic: Icons.Add,
            agentName: "Jason",
            designation: "Sales Agent, Bhopal",
            assigned: 14,
            pending: 1,
          },
          {
            pic: Icons.Add,
            agentName: "Jason",
            designation: "Sales Agent, Bhopal",
            assigned: 14,
            pending: 1,
          },
        ].map((agent, index) => {
          return <AgentListItem key={`agent${index}`} agent={agent} />;
        })}
      </Container>
    </Container>
  );
};

export default AgentSideBar;

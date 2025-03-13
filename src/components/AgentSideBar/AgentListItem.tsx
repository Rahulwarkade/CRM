import React from "react";
import ProfilePic from "@/public/ProfilePic.png";
import { Container, Text, Image } from "@/components/common";

interface Agent {
  agentName: string;
  designation: string;
  assigned: number;
  pending: number;
}

interface AgentListItemProps {
  agent: Agent;
}

const AgentListItem: React.FC<AgentListItemProps> = ({ agent }) => {
  return (
    <Container
      maxWidth="none"
      className="w-full relative flex gap-4 items-center max-xl:flex-wrap"
      padding="none"
    >
      {/* Agent Item */}
      <Container
        maxWidth="none"
        className="max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] 2xl:size-[72px] rounded-full overflow-hidden relative bg-teal-300"
        padding="none"
      >
        <Image
          src={ProfilePic.src}
          alt="Profile Picture"
          fill
          objectFit="cover"
        />
      </Container>
      {/* Agent Details */}
      <Container maxWidth="none" padding="none">
        <Text
          variant="h3"
          className="text-sm 2xl:text-xl text-black-000000 capitalize"
        >
          {agent.agentName}
        </Text>
        <Text
          variant="p"
          className="text-sm 2xl:text-base text-gray-787878 capitalize"
        >
          {agent.designation}
        </Text>
        <Container maxWidth="none" className="flex gap-4" padding="none">
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-blue-3e91ff"
          >
            Assigned {" - "} {agent.assigned}
          </Text>
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-green-36ce00"
          >
            {" "}
            Pending {" - "} 0{agent.pending}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default AgentListItem;

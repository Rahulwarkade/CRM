import { Icons } from "@/assets/icons";
import React from "react";
import { AgentListItem } from "@/components";

const AgentSideBar = () => {
  return (
    <>
      {/* Agent Side Bar */}
      <div className="min-w-[358px] rounded-[40px] bg-blue-ffffff59 p-6">
        <div className="w-full relative flex justify-between items-center">
          <h3 className="text-base 2xl:text-xl text-black-000000 font-medium capitalize">
            Agents
          </h3>
          <p className="text-sm 2xl:text-base text-blue-3e91ff">View All</p>
        </div>

        <div className="w-full relative flex flex-col gap-[40px] mt-[30px]">
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
        </div>
      </div>
    </>
  );
};

export default AgentSideBar;

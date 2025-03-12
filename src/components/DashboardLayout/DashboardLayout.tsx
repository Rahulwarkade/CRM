import React from "react";
import { AgentSideBar, Header, LeadTable, ToDoSideBar } from "@/components";
import { svgLinePath } from "@/constant";
const DashboardLayout: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        {/* Stats */}
        <div className="w-[80%] max-w-[1440px] mx-auto my-[20px] 2xl:my-[40px] relative">
          <div className="w-full h-full absolute flex justify-between">
            {[
              { title: "fresh", data: 26 },
              { title: "lost", data: 8 },
              { title: "cold", data: 15 },
              { title: "warm", data: 26 },
              { title: "hot", data: 4 },
              { title: "won", data: 37 },
            ].map((bucket, index: number) => {
              return (
                <div
                  key={`${index}bucket`}
                  className="size-[72px] rounded-full bg-white-ffffffbf backdrop-blur-[16px] flex flex-col  items-center justify-center"
                >
                  <span className="text-base 2xl:text-2xl font-semibold text-black-000000">
                    {bucket?.data}
                  </span>
                  <span className="text-sm 2xl:text-base  text-black-000000 capitalize">
                    {bucket?.title}
                  </span>
                </div>
              );
            })}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="72"
            viewBox="0 0 1440 72"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={`${svgLinePath}`}
              fill="url(#paint0_linear_228_8555)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_228_8555"
                x1="36"
                y1="36"
                x2="1405"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#193D8F" />
                <stop offset="0.2" stopColor="#1744B6" />
                <stop offset="0.4" stopColor="#1454E1" />
                <stop offset="0.6" stopColor="#3E91FF" />
                <stop offset="0.8" stopColor="#8ECBFF" />
                <stop offset="1" stopColor="#D9ECFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-full relative flex justify-between gap-5">
          <ToDoSideBar />
          <div className="w-full relative overflow-auto">
          <LeadTable />
          </div>
          <AgentSideBar />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

"use client";
import React, { useEffect, useState } from "react";
import { Filter, LeadTableRow, SearchBar } from "@/components";
import Image from "next/image";
import { Icons } from "@/assets/icons";

interface ClientDetails {
  serialNumber: number;
  leadSource: string;
  clientName: string;
  mobileNumber: number;
  ibw: string;
  createdDate: string;
  endDate: string;
  duration: string;
}

const LeadTable = () => {
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [clientDetails, setClientDetails] = useState<ClientDetails[]>([]);

  useEffect(() => {
    setColumnOrder([
      "S No",
      "Lead Source",
      "Client Name",
      "Mobile No.",
      "IBW (Target)",
      "Created Date",
      "End Date",
      "Duration",
    ]);

    setClientDetails([
      {
        serialNumber: 1,
        leadSource: "wati",
        clientName: "aditya singh",
        mobileNumber: 987456123,
        ibw: "74 kgs",
        createdDate: "31 Jul 24",
        endDate: "31 Jul 24",
        duration: "30 Days",
      },
      {
        serialNumber: 1,
        leadSource: "wati",
        clientName: "aditya singh",
        mobileNumber: 987456123,
        ibw: "74 kgs",
        createdDate: "31 Jul 24",
        endDate: "31 Jul 24",
        duration: "30 Days",
      },
      {
        serialNumber: 1,
        leadSource: "wati",
        clientName: "aditya singh",
        mobileNumber: 987456123,
        ibw: "74 kgs",
        createdDate: "31 Jul 24",
        endDate: "31 Jul 24",
        duration: "30 Days",
      },
      {
        serialNumber: 1,
        leadSource: "wati",
        clientName: "aditya singh",
        mobileNumber: 987456123,
        ibw: "74 kgs",
        createdDate: "31 Jul 24",
        endDate: "31 Jul 24",
        duration: "30 Days",
      },
      {
        serialNumber: 1,
        leadSource: "wati",
        clientName: "aditya singh",
        mobileNumber: 987456123,
        ibw: "74 kgs",
        createdDate: "31 Jul 24",
        endDate: "31 Jul 24",
        duration: "30 Days",
      },
    ]);
  }, []);

  return (
    <>
      <div className="min-w-[800px] rounded-[40px] bg-blue-ffffff59 ">
        <div className="w-full relative  p-10 flex flex-col gap-10">
          {/* Search bar, Filter and Controlers */}
          <div className="w-full relative flex justify-between">
            {/* Search Bar and Filter Component */}
            <div className="w-full relative flex gap-4">
              <SearchBar />
              <Filter />
            </div>
            {/* Controlers  */}
            <div className="relative flex gap-2 2xl:gap-4">
              <span className="size-[48px] rounded-full bg-white flex items-center justify-center">
                <Image src={Icons.add1} alt="add" width={24} height={24} />
              </span>
              <span className="size-[48px] rounded-full bg-blue-ffffff59 flex items-center justify-center">
                <Image
                  src={Icons.profileAdd}
                  alt="add"
                  width={24}
                  height={24}
                />
              </span>
              <span className="size-[48px] rounded-full bg-white flex items-center justify-center">
                <Image
                  src={Icons.receiveSquare}
                  alt="add"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
          {/* Table  */}

          <table className="w-full">
            <thead>
              {/* Table Head */}
              <tr className="">
                <th className="text-start">
                  <input type="checkbox" />
                </th>
                {columnOrder.map((column: string, index: number) => {
                  return (
                    <th
                      key={`head${index}`}
                      className="text-start text-sm 2xl:text-base font-semibold text-black-000000 capitalize"
                    >
                      {column}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="w-full">
              {/* Table Row */}
              <tr className="h-[30px]"></tr>
              {clientDetails.map((client: ClientDetails, index: number) => {
                return (
                  <React.Fragment key={`client${index}`}>
                    <LeadTableRow client={client} />
                    <tr className="h-[30px]"></tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeadTable;

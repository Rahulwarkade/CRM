"use client";
import React, { useEffect, useState } from "react";
import { Filter, LeadTableRow, SearchBar } from "@/components";
import { Container, Text, Image, Input } from "@/components/common";
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

const LeadTable: React.FC = () => {
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [clientDetails, setClientDetails] = useState<ClientDetails[]>([]);
  const [selectAll, setSelectAll] = useState(false);

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
    <Container
      maxWidth="none"
      className="min-w-[800px] rounded-[40px] bg-blue-ffffff59"
      padding="none"
    >
      <Container
        maxWidth="none"
        className="w-full relative p-10 flex flex-col gap-10"
        padding="none"
      >
        {/* Search bar, Filter and Controllers */}
        <Container
          maxWidth="none"
          className="w-full relative flex justify-between"
          padding="none"
        >
          {/* Search Bar and Filter Component */}
          <Container
            maxWidth="none"
            className="w-full relative flex gap-4"
            padding="none"
          >
            <SearchBar />
            <Filter />
          </Container>
          {/* Controllers */}
          <Container
            maxWidth="none"
            className="relative flex gap-2 2xl:gap-4"
            padding="none"
          >
            <Container
              maxWidth="none"
              className="size-[48px] rounded-full bg-white flex items-center justify-center"
              padding="none"
            >
              <Image src={Icons.add1.src} alt="add" width={24} height={24} />
            </Container>
            <Container
              maxWidth="none"
              className="size-[48px] rounded-full bg-blue-ffffff59 flex items-center justify-center"
              padding="none"
            >
              <Image
                src={Icons.profileAdd.src}
                alt="add"
                width={24}
                height={24}
              />
            </Container>
            <Container
              maxWidth="none"
              className="size-[48px] rounded-full bg-white flex items-center justify-center"
              padding="none"
            >
              <Image
                src={Icons.receiveSquare.src}
                alt="add"
                width={24}
                height={24}
              />
            </Container>
          </Container>
        </Container>

        {/* Table */}
        <Container maxWidth="none" className="w-full" padding="none">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start">
                  <label className="sr-only" htmlFor="select-all">
                    Select all rows
                  </label>
                  <Input
                    id="select-all"
                    type="checkbox"
                    checked={selectAll}
                    onChange={(e) => setSelectAll(e.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
                {columnOrder.map((column: string, index: number) => (
                  <th key={`head${index}`}>
                    <Text
                      variant="span"
                      weight="semibold"
                      size="base"
                      className="text-black-000000 capitalize"
                      align="left"
                    >
                      {column}
                    </Text>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="h-[30px]" />
              {clientDetails.map((client: ClientDetails, index: number) => (
                <React.Fragment key={`client${index}`}>
                  <LeadTableRow client={client} selected={selectAll} />
                  <tr className="h-[30px]" />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </Container>
      </Container>
    </Container>
  );
};

export default LeadTable;

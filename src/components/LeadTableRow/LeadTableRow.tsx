"use client";

import React, { useState, useEffect } from "react";
import { Text } from "@/components";

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

interface LeadTableRowProps {
  client: ClientDetails;
  selected?: boolean;
}

const LeadTableRow: React.FC<LeadTableRowProps> = ({
  client,
  selected = false,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const {
    serialNumber,
    leadSource,
    clientName,
    mobileNumber,
    ibw,
    createdDate,
    endDate,
    duration,
  } = client;

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <tr className="text-xs xl:text-sm 2xl:text-base">
      <td className="pr-4">
        <label className="sr-only" htmlFor={`select-row-${serialNumber}`}>
          Select row {serialNumber}
        </label>
        <input
          id={`select-row-${serialNumber}`}
          type="checkbox"
          checked={isSelected}
          onChange={(e) => setIsSelected(e.target.checked)}
          aria-label={`Select row ${serialNumber}`}
        />
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {serialNumber}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {leadSource}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {clientName}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {mobileNumber}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {ibw}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {createdDate}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {endDate}
        </Text>
      </td>
      <td>
        <Text variant="span" className="text-inherit">
          {duration}
        </Text>
      </td>
    </tr>
  );
};

export default LeadTableRow;

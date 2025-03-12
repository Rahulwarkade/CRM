import React from 'react'
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
}
const LeadTableRow : React.FC<LeadTableRowProps> = ({ client }: LeadTableRowProps) => {
  const { serialNumber, leadSource, clientName, mobileNumber, ibw, createdDate, endDate, duration } = client;
  return (
    <>
      <tr className='text-xs xl:text-sm 2xl:text-base '>
        <td className='pr-4'><input type="checkbox" /></td>
        <td>{serialNumber}</td>
        <td>{leadSource}</td>
        <td>{clientName}</td>
        <td>{mobileNumber}</td>
        <td>{ibw}</td>
        <td>{createdDate}</td>
        <td>{endDate}</td>
        <td>{duration}</td>
      </tr>
    </>
  )
}

export default LeadTableRow
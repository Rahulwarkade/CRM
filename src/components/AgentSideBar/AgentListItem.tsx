import React from 'react';
import ProfilePic from "@/public/ProfilePic.png";
import Image from 'next/image';

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
        <div className='w-full relative flex  gap-4 items-center max-xl:flex-wrap'>
            {/* Agent Item */}
            <div className='max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] 2xl:size-[72px] rounded-full overflow-hidden relative bg-teal-300'>
                <Image
                    src={ProfilePic}
                    alt="pic"
                    className='object-cover'
                />
            </div>
            {/* Agent Details */}
            <div>
                <h3 className='text-sm  2xl:text-xl text-black-000000 capitalize'>{agent.agentName}</h3>
                <p className='text-sm 2xl:text-base text-gray-787878 capitalize'>{agent.designation}</p>
                <p className='flex gap-4'>
                    <span className='text-sm 2xl:text-base text-blue-3e91ff'>Assigned {" - "} {agent.assigned}</span>
                    <span className='text-sm 2xl:text-base text-green-36ce00'>{" "} Pending {" - "} 0{agent.pending}</span>
                </p>
            </div>
        </div>
    );
}

export default AgentListItem;
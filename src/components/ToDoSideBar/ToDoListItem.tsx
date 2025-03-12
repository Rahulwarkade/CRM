import Image from 'next/image'
import React from 'react'

interface Lead {
    icon: string;
    textValue: string;
    stats: number;
}

interface ToDoListItemProps {
    lead: Lead;
    index : number;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ lead,index }) => {
    return (
        <div className={`max-w-[216px] ${index==0 ? 'h-[80px] p-4 bg-blue-ffffff59':"h-auto"}  rounded-3xl flex gap-[10px] items-center  `}>
            {/* Icon */}
            <div className='min-w-[48px] min-h-[48px] rounded-full bg-white relative flex justify-center items-center'>
                <Image
                    src={lead.icon}
                    width={24}
                    height={24}
                    alt="assign"
                />
            </div>
            <p className='text-sm 2xl:text-base text-black-000000 font-medium capitalize text-nowrap'>
                {lead.textValue}
                <span>{" "}({lead.stats.toString()})</span>
            </p>
        </div>
    )
}

export default ToDoListItem
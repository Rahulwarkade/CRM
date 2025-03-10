import React from 'react'

const ActionPanel = () => {
  return (
    <>
        <div className='w-[358px] relative  rounded-[40px] bg-blue-ffffff59 px-4 py-[27px] flex flex-col gap-2 2xl:gap-6'>
            {/* Action Button */}
            <div className='w-full relative flex gap-2 2xl:gap-4'>
                {/* View Report Data */}
                <button className='w-[155px] h-[48px] rounded-full border border-blue-3e91ff bg-blue-ffffffb2 text-sm 2xl:text-base font-medium'>View Report Data</button>
                {/* Assign Target */}
                <button className='w-[155px] h-[48px] rounded-full border border-blue-3e91ff bg-blue-3e91ff text-white text-sm 2xl:text-base font-medium'>Assign Target</button>
            </div>
            {/* Toggler Button */}
            <div className='w-full relative flex gap-6 justify-center'>
                <span className='text-sm 2xl:text-base text-blue-3e91ff font-medium'>Auto-Assign</span>
                <span className='flex gap-2'>
                <span className='text-sm 2xl:text-base text-gray-b7b7b7  font-medium'>Off</span>
                <span className='w-[40px] h-6 rounded-full bg-blue-3e91ff relative flex items-center'>
                    <span className='size-4 rounded-full bg-white absolute right-0.5'></span>
                </span>
                <span className='text-sm 2xl:text-base text-blue-3e91ff font-medium'>On</span>
                </span>
            </div>
        </div>
    </>
  )
}

export default ActionPanel
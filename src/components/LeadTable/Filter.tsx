import { Icons } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'

const Filter = () => {
  return (
        <div className="w-full max-w-[163px] h-[58px] rounded-[28px] bg-blue-ffffff59 relative">
          <span className="absolute top-1/2 -translate-y-1/2 right-6">
            <Image src={Icons.arrowDown} width={20} height={20} alt="Mail" />
          </span>
          <input
            className="w-full h-full relative py-[18px] px-6 outline-none placeholder:text-xs 2xl:placeholder:text-base placeholder:text-gray-787878"
            type="text" 
            placeholder="Filter Date"
          />
        </div>
  )
}

export default Filter
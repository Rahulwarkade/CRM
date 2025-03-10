import { Icons } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'

const BreadcrubNav = () => {
  return (
    <>
        <div className=' text-center w-fit'>
            <h3 className='text-[1rem] 2xl:text-[2rem] text-[#000000] font-semibold'>Home</h3>
            <div className='flex gap-4 items-center'>
                <span className='text-base 2xl:text-2xl text-black-414141 capitalize'>Home</span>
                <Image
                src={Icons.arrowRight}
                width={24}
                height={24}
                alt='back'
                />
                <span className='text-base 2xl:text-2xl text-black-414141 capitalize'>Fresh Leads</span>
            </div>
        </div>
    </>
  )
}

export default BreadcrubNav
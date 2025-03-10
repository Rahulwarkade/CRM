import React from 'react'
import { DashboardLayout } from '@/components';


const Hod : React.FC = ()=>{
    return (
        <>
        <div className='w-full h-screen relative bg-opacity-50 bg-gradient-to-b from-blue-e5e5e583 to-blue-81b8ff85 px-[5%] md:px-[8%] py-[40px]'>
            <DashboardLayout/>
        </div>
        </>
    )
}

export default Hod;
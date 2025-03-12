import { Icons } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const LogoutButton: React.FC = () => {
    return (
                <div className='w-full max-w-[195px] h-[53px] rounded-2xl p-4 flex gap-[10px] bg-blue-ffffff59 text-red-e52c42'>
                    <Image
                    src={Icons.lougOut1}
                    alt="settings"
                    width={20}
                    height={20}
                    color='bg-red-e52c42'
                    />
                    <p className='text-sm 2xl:text-base text-red-e52c42'>Log Out</p>
                </div>
    );
}

export default LogoutButton;
import { Icons } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const SettingMenu: React.FC = () => {
    return (
        <div className='w-full max-w-[195px] h-[53px] rounded-2xl p-4 flex gap-[10px] bg-blue-ffffff59'>
            <Image
            src={Icons.settings2}
            alt="settings"
            width={20}
            height={20}
            />
            <p className='text-sm 2xl:text-base text-gray-787878'>Settings</p>
        </div>
    );
}

export default SettingMenu;
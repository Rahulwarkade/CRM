import React from "react";
import Image from "next/image";
import pic from "@/public/ProfilePic.png";
import { Icons } from "@/assets/icons";
const UserProfileCard: React.FC = () => {
  return (
    <div className="max-w-[358px] relative flex items-center gap-4 rounded-[40px] bg-blue-ffffff59 px-4 py-[27px] 2xl:pr-[80px] ">
      {/* UserProfileCard Container */}
      {/* Profile picture */}
      <div className="size-[60px] 2xl:size-[80px] rounded-full relative overflow-hidden">
        <Image src={pic} alt="Picture" fill className="object-cover" />
      </div>
      {/* Profile Credentials */}
      <div>
        {/* Profile Name */}
        <h3 className="text-base 2xl:text-xl text-black-000000 font-medium capitalize">
          rahul sharma
        </h3>
        {/* Profile Designation and Location */}
        <p>
          <span className="text-sm 2xl:text-base text-black-787878 capitalize">Sales</span>
          <span className="text-sm 2xl:text-base text-black-787878 uppercase"> HOD,</span>
          <span className="text-sm 2xl:text-base text-blue-3e91ff capitalize"> Bhopal</span>
        </p>
        {/* Profile Statistics */}
        <div className="w-full relative flex items-center gap-1">
          <span>
            <Image src={Icons.cup} width={16} height={16} alt="Reward" />
          </span>
          <span className="text-sm 2xl:text-base text-yellow-d88 capitalize text-yellow-d88b500">
            January
          </span>

          <span className="text-sm 2xl:text-base text-yellow-d88b500 capitalize">
            {" - "}
            <span className="text-yellow-d88b500">₹</span>1,250
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

import React from "react";
import pic from "@/public/ProfilePic.png";
import { Icons } from "@/assets/icons";
import { Container, Text, Image } from "@/components/common";

const UserProfileCard: React.FC = () => {
  return (
    <Container
      maxWidth="none"
      className="max-w-[358px] relative flex items-center gap-4 rounded-[40px] bg-blue-ffffff59 px-4 py-[27px] 2xl:pr-[80px]"
      padding="none"
    >
      {/* Profile picture */}
      <Container
        maxWidth="none"
        className="size-[60px] 2xl:size-[80px] rounded-full relative overflow-hidden"
        padding="none"
      >
        <Image src={pic.src} alt="Profile Picture" fill objectFit="cover" />
      </Container>

      {/* Profile Credentials */}
      <Container maxWidth="none" padding="none">
        {/* Profile Name */}
        <Text
          variant="h3"
          weight="medium"
          className="text-base 2xl:text-xl text-black-000000 capitalize"
        >
          rahul sharma
        </Text>

        {/* Profile Designation and Location */}
        <Container maxWidth="none" padding="none">
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-black-787878 capitalize"
          >
            Sales
          </Text>
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-black-787878 uppercase"
          >
            {" "}
            HOD,
          </Text>
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-blue-3e91ff capitalize"
          >
            {" "}
            Bhopal
          </Text>
        </Container>

        {/* Profile Statistics */}
        <Container
          maxWidth="none"
          className="w-full relative flex items-center gap-1"
          padding="none"
        >
          <Container maxWidth="none" padding="none">
            <Image src={Icons.cup.src} alt="Reward" width={16} height={16} />
          </Container>
          <Text
            variant="span"
            className="text-sm 2xl:text-base text-yellow-d88 capitalize text-yellow-d88b500"
          >
            January
          </Text>

          <Text
            variant="span"
            className="text-sm 2xl:text-base text-yellow-d88b500 capitalize"
          >
            {" - "}
            <Text variant="span" className="text-yellow-d88b500">
              ₹
            </Text>
            1,250
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default UserProfileCard;

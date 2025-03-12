import { Hod } from "@/components";
import React from "react";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

const Slug: React.FC<SlugProps> = async () => {
  return (
    <>
      <Hod />
    </>
  );
};

export default Slug;

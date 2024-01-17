import { Image } from "@nextui-org/react";
import React, { useState, useCallback } from "react";

const DoctorMapAddress: React.FC = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="rounded-xl bg-[#f3f3f3] flex justify-center items-center p-2">
        <Image src="/images/map1.png" className="w-full" />
      </div>
    </div>
  );
};

export default DoctorMapAddress;

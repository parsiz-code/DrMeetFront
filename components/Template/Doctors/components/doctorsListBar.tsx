import { Link } from "@nextui-org/react";
import React from "react";

const DoctorsListBar = () => {
  return (
    <div className="py-3 text-left">
      <div className="flex justify-end items-center gap-4">
        <Link href="/login" className="text-[#004fcd] border border-[#004fcd] px-4 py-1 rounded-xl hover:cursor-pointer">
          ورود
        </Link>
        <Link href="/" className="text-white bg-[#004fcd] px-4 py-1 rounded-xl hover:cursor-pointer">
          بازگشت
        </Link>
      </div>
    </div>
  );
};

export default DoctorsListBar;

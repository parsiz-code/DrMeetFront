import { toPersianDigits } from "@/helper/dateTimeHelper";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const CouncilRate = () => {
  const [textCount , setTextCount]=useState<number>(750000)
  const [cellCount , setCellCount]=useState<number>(1750000)
  return (
    <div className="my-4 px-2 lg:px-5">
      <div className="bg-[#f3f3f3] p-7 rounded-xl text-center">
        <h6 className="px-16 flex justify-between items-center">
          <span className="text-gray-500">مبلغ مشاوره متنی</span>
          <span className=" font-bold">
            {toPersianDigits(textCount.toLocaleString())} ریال
          </span>
        </h6>

        <Button className="mt-10 bg-[#5890ff] text-white">مشاوره متنی</Button>
      </div>

      <div className="bg-[#f3f3f3] p-7 rounded-xl text-center mt-5">
        <h6 className="px-16 flex justify-between items-center">
          <span className="text-gray-500">مبلغ مشاوره تلفنی</span>
          <span className=" font-bold">
            {toPersianDigits(cellCount.toLocaleString())} ریال
          </span>
        </h6>

        <Button className="mt-10 bg-[#ff588f] text-white">مشاوره تلفنی</Button>
      </div>
    </div>
  );
};

export default CouncilRate;

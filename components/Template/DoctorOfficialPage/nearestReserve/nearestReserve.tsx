import { toPersianDigits } from "@/helper/dateTimeHelper";
import { Button } from "@nextui-org/react";

const NearReserve = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="bg-[#f3f3f3] p-6 text-center leading-10 rounded-xl">
      <h6 className="text-gray-500">نزدیک ترین نوبت برای مراجعه </h6>
      <h6 className="font-bold text-[1.3rem]">
        {toPersianDigits("چهارشنبه   27 خرداد 1402 - ساعت 18:30")}
      </h6>
      <h6 className="text-[1.2rem]">
        {toPersianDigits("میانگین زمان  انتظار تا ویزیت :  15 دقیقه")}
      </h6>
      <Button className="mt-10 text-white bg-[#2CE039]">دریافت نوبت</Button>
    </div>
    </div>
  );
};

export default NearReserve;

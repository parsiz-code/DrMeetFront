import { Button } from "@nextui-org/react";

const SuggestionBox = () => {
  return (
    <div className="my-4 px-2 lg:px-5">
      <div className="py-12 text-center bg-[#f3f3f3] rounded-xl">
        <h6 className="mb-8">آیا این پزشک را به دیگران پیشنهاد می دهید ؟</h6>
        <div className="flex justify-center items-center gap-3">
            <Button className="bg-green-600 text-white px-12">بله</Button>
            <Button className="bg-red-600 text-white px-12">خیر</Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;

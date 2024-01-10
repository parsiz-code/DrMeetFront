import { Grid, Rating } from "@mui/material";
import { Image } from "@nextui-org/react";
import React, { FC } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { toPersianDigits } from "@/helper/dateTimeHelper";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

interface IProps {
  doctorName: string;
  rating: number;
}
const DoctorAbout: FC<IProps> = ({ doctorName, rating }) => {
  return (
    <div>
      <div className="bg-[#f3f3f3] rounded-xl py-5 px-6">
        <div className="flex items-center gap-10 mb-4">
          <Image
            src="https://i.pravatar.cc/300"
            width={100}
            height={100}
            radius="full"
          />
          <div className="">
            <h2 className="text-white bg-[#0095de] w-fit py-1 px-3 rounded-full text-[0.8rem]">
              قلب و عروق
            </h2>
            <h2 className="mt-4 mb-1 font-bold">{doctorName}</h2>
            <h2 className="text-[0.9rem] text-gray-700">
              فوق تخصص مغز و اعصاب{" "}
            </h2>
          </div>
        </div>
        <div className="flex items center gap-4">
          <div className="">
            {Array.from({ length: rating }, (_, index) => (
              <StarOutlinedIcon className="text-amber-500" key={index} />
            ))}
          </div>
          <div className="flex items-center">
            <PersonOutlineOutlinedIcon className="text-[1.3rem] ml-1" />
            <h6 className="">{toPersianDigits("1379")}</h6>
          </div>
        </div>
        <div className="mt-4 leading-8">
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <MedicalInformationOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">شماره نظام پزشکی : </h6>
            <h6 className="">{toPersianDigits("354635")}</h6>
          </div>
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <SchoolOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">سوابق تحصیلی : </h6>
            <h6 className="">دکتری روانشناسی سلامت</h6>
          </div>
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <ImportContactsOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">سوابق علمی : </h6>
            <h6 className="">
              {toPersianDigits(
                "عضو هیئت علمی دانشگاه مدرس روانشناسی با ۲۱ سال سابقه"
              )}
            </h6>
          </div>
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <BusinessOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">بیمارستان ها :  </h6>
            <h6 className="">{toPersianDigits("مرکز مشاوره بزرگمهر ")}</h6>
          </div>
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <ChatBubbleOutlineOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">نظرات ثبت شده :  </h6>
            <h6 className="">{toPersianDigits("6456")}</h6>
          </div>
          <div className="flex items-center text-[0.9rem] text-gray-700">
            <PlaceOutlinedIcon className="text-[1.2rem] text-gray-700 ml-2" />
            <h6 className="ml-1">منطقه :  </h6>
            <h6 className="">{toPersianDigits("تهران")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAbout;

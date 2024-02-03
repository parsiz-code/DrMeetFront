import { Grid } from "@mui/material";
import { Avatar, Divider, Link } from "@nextui-org/react";
import React, { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { toPersianDigits } from "@/helper/dateTimeHelper";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VideocamIcon from "@mui/icons-material/Videocam";

interface IProps {
  doctorId: number;
  photo: string;
  name: string;
  description: string;
  location: string;
}
const DoctorItem: FC<IProps> = ({
  photo = null,
  name,
  location,
  description,
  doctorId,
}) => {
  return (
    <div className="border rounded-xl !mb-2">
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <div className="pr-14 py-6 flex">
            <div className="flex !flex-col justify-center items-center ml-5">
              <Avatar
                src={
                  photo === null
                    ? "./images/noProfile.png"
                    : `data:image/png;base64,${photo}`
                }
                size="lg"
                className="h-[7rem] w-[7rem]"
              />
              <div className="flex justify-center items-center w-full mt-3">
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
              </div>
            </div>
            <div className="flex !flex-col gap-2 pt-8">
              <Link
                href={`doctors/${doctorId}`}
                className="text-[1.1rem] text-black hover:text-gray-600 font-bold"
              >
                دکتر {name}
              </Link>
              <h3 className="text-[0.9rem] text-gray-400">
                {description}
                <span>({toPersianDigits(12)} سال تجربه)</span>
              </h3>
              <div className="flex items-center gap-1 f-full">
                <ThumbUpIcon className="text-green-600" />
                <h6 className="text-gray-400 text-[0.85rem]">
                  {toPersianDigits(99)}%
                </h6>
                <h6 className="text-gray-400 text-[0.85rem]">
                  پیشنهاد کاربران
                </h6>
              </div>
              <h6 className="flex items-center gap-2">
                <span className=" text-[0.8rem]">حداقل زمان انتظار:</span>
                <span className=" text-[0.8rem] flex items-center gap-1">
                  <p className="text-red-500">یک</p>
                  <p className="">ساعت</p>
                </span>
              </h6>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div className="flex !flex-col justify-between px-3 pb-2 pt-14 h-full">
            <div className="self-end">
              <div className="flex items-center gap-1">
                <div className="bg-gray-200 rounded-full p-1">
                  <LocationOnIcon className="text-gray-500" />
                </div>
                <p className="text-[0.8rem] text-gray-500 bg-gray-200 py-1 px-2 rounded-full">
                  نزدیکترین مرکز به شما
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center px-">
              <div className="text-gray-500 flex gap-1">
                <DomainAddIcon />
                <p className="">حضوری</p>
              </div>
              <div className="text-gray-500 flex gap-1">
                <PhoneInTalkIcon />
                <p className="">تلفنی</p>
              </div>
              <div className="text-gray-500 flex gap-1">
                <QuestionAnswerIcon />
                <p className="">متنی</p>
              </div>
              <div className="text-gray-500 flex gap-1">
                <VideocamIcon />
                <p className="">ویدیویی</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="bg-[#f3f4f6] h-10"></div>
          <div className="py-2 px-8 flex justify-between gap-3">
            <div className="flex items-center gap-1">
              <div className="bg-gray-200 rounded-full p-1">
                <LocationOnIcon className="text-gray-500" />
              </div>
              <p className="text-[0.8rem] text-gray-500 py-1 px-2 rounded-full">
                {location}
              </p>
            </div>
            <div className="">
              <Link
                href=""
                target="_blank"
                className="text-[0.9rem] text-black hover:text-gray-600"
              >
                دسترسی سریع به آدرس
              </Link>
            </div>
          </div>
          <Divider />
          <div className="py-4 px-8 flex justify-between">
            <div className="flex items-center gap-2">
              <h6 className="text-[0.9rem] text-gray-500">
                نردیکترین نوبت حضوری:
              </h6>
              <h6 className="text-[0.9rem] text-gray-400">
                {toPersianDigits("15 بهمن 1402")}
              </h6>
              <h6 className="text-[0.9rem] text-green-500">(نوبت امروز)</h6>
            </div>
            <div className="flex items-center gap-2">
              <Link className="text-white text-[0.95rem] py-2 px-7 rounded-xl bg-green-600 hover:cursor-pointer">مشاوره آنلاین</Link>
              <Link className="text-white text-[0.95rem] py-2 px-7 rounded-xl bg-blue-600 hover:cursor-pointer">نوبت حضوری</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorItem;

import React, { FC } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import style from "./yourDoctor.module.css";
import { Button, Link, User } from "@nextui-org/react";

interface IProps {
  link?: string;
  name?: string;
  description?: string;
  avatar?: string;
}

const DoctorItem: FC<IProps> = ({ link, name, description, avatar }) => {
  return (
    <Link
      href="#"
      className={`flex justify-between items-center bg-white transition-all hover:-translate-x-2 rounded-lg shadow-lg py-3 px-2 text-black ${style.doctorItem}`}
    >
      <User
        name="دکتر لورم ایپسوم"
        description={
          <span className="text-gray-500">ﻓﻮق ﺗﺨﺼﺺ ﻣﻐﺰ و اﻋﺼﺎب کودکان</span>
        }
        avatarProps={{ src: "https://i.pravatar.cc/300" }}
      />
      <span className="">
        <span>مشاهده</span>
        <KeyboardArrowLeftIcon className={`${style.seeDoctorArrow}`} />
      </span>
    </Link>
  );
};

export default DoctorItem;

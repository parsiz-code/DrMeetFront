import { Grid } from "@mui/material";
import { Avatar, Divider, Link } from "@nextui-org/react";
import React, { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface IProps {
  doctorId: number;
  photo: string;
  name: string;
  description: string;
  location: string;
}
const DoctorItem: FC<IProps> = ({
  photo,
  name,
  location,
  description,
  doctorId,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="p-3">
      <div className="rounded-xl p-2 bg-[#f3f4f6]">
        <Link
          href={`doctors/${doctorId}`}
          className="py-2 px-4 flex !items-center"
        >
          <div className="w-1/3">
            <div className="flex !flex-col !items-center !justify-center">
              <Avatar src={photo === null ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' : `data:image/png;base64,${photo}`} size="lg" />
              <div className="">
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
                <StarIcon className="text-amber-500 text-[1rem]" />
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="flex !flex-col !items-center !justify-center !gap-2">
              <h3 className="text-[0.9rem] text-black">{name}</h3>
              <h3 className="text-[0.75rem] text-center px-2 text-gray-500">
                {description}
              </h3>
              <h3 className="text-[0.75rem] text-black">
                <LocationOnIcon className="text-[0.8rem]" />
                {location}
              </h3>
            </div>
          </div>
        </Link>
        <Divider />
        <div className="flex justify-center items-center gap-2 py-3">
          <Link
            href="#"
            className="text-[0.9rem] py-2 px-3 rounded-full bg-[#9CCC2C] hover:!bg-[#6d8e1e] text-white transition-all"
          >
            نوبت حضوری
          </Link>
          <Link
            href="#"
            className="text-[0.9rem] py-2 px-3 rounded-full bg-gray-300 text-white"
            isDisabled={true}
          >
            مشاوره آنلاین
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default DoctorItem;

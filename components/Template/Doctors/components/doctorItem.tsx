import { Grid } from "@mui/material";
import { Avatar, Divider, Link } from "@nextui-org/react";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function DoctorItem() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="p-3">
      <div className="rounded-xl p-2 bg-[#f3f4f6]">
        <Link href="doctors/1">
          <Grid container className="py-2 flex !items-center">
            <Grid item xs={3} className="">
              <div className="flex !flex-col !items-center !justify-center">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  size="lg"
                />
                <div className="">
                  <StarIcon className="text-amber-500 text-[1rem]" />
                  <StarIcon className="text-amber-500 text-[1rem]" />
                  <StarIcon className="text-amber-500 text-[1rem]" />
                </div>
              </div>
            </Grid>
            <Grid item xs={9} className="">
              <div className="flex !flex-col !items-center !justify-center !gap-2">
                <h3 className="text-[0.9rem] text-black">دکتر لورم ایپسوم</h3>
                <h3 className="text-[0.75rem] text-center px-2 text-gray-500">
                  اقدامات مداخله‌ای قلب و عروق (اینترونشنال کاردیولوژی)
                  بزرگسالان
                </h3>
                <h3 className="text-[0.75rem] text-black">
                  <LocationOnIcon className="text-[0.8rem]" />
                  ساری
                </h3>
              </div>
            </Grid>
          </Grid>
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
}

export default DoctorItem;

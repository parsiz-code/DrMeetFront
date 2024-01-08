import { Box, Grid } from "@mui/material";
import OptionsLine from "../components/options/options";
import { Button, Link, User } from "@nextui-org/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Span } from "next/dist/trace";

const YourDoctors = () => {
  return (
    <div className="relative w-full bg-slate-200">
      <div className="absolute -top-10 w-full">
        <OptionsLine />
      </div>
      <Grid container className="w-full px-16 py-32">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="mb-10 text-center"
        >
          <h1 className="text-center text-[1.5rem] font-bold">
            پزشکان همراه شما
          </h1>
        </Grid>
        <Grid item container xs={12} sm={12} md={6} lg={6} columnSpacing={3}>
          <Grid item xs={12} className="text-center mb-2">
            <span className="text-gray-500">فعال ترین پزشکان</span>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className="p-10">
            <Link href="#" className="flex justify-between items-center bg-white rounded-lg shadow-lg py-3 px-2 doctorItem">
              <User
                name="دکتر لورم ایپسوم"
                description={
                  <span className="text-gray-500">
                    ﻓﻮق ﺗﺨﺼﺺ ﻣﻐﺰ و اﻋﺼﺎب کودکان
                  </span>
                }
                avatarProps={{ src: "https://i.pravatar.cc/300" }}
              />
              <span className="">
                <span>مشاهده</span>
                <KeyboardArrowLeftIcon className="seeDoctorArrow"/>
              </span>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className="w-full mt-10">
            <Button
              href="#"
              className="flex justify-between items-center bg-[#00DAF5]"
            >
              لیست فعال ترین پزشکان
            </Button>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={12} md={6} lg={6} columnSpacing={3}>
          <Grid item xs={12} className="text-center mb-2">
            <span className="text-gray-500">جدید ترین پزشکان</span>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className="p-10">
            <Link href="#" className="flex justify-between items-center bg-white rounded-lg shadow-lg py-3 px-2">
            <User
                name="دکتر لورم ایپسوم"
                description={
                  <span className="text-gray-500">
                    ﻓﻮق ﺗﺨﺼﺺ ﻣﻐﺰ و اﻋﺼﺎب کودکان
                  </span>
                }
                avatarProps={{ src: "https://i.pravatar.cc/300" }}
              />
              <span className="">
                <span>مشاهده</span>
                <KeyboardArrowLeftIcon />
              </span>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className="w-full mt-10">
            <Button
              href="#"
              className="flex justify-between items-center bg-[#00DAF5]"
            >
              لیست جدید ترین پزشکان
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default YourDoctors;

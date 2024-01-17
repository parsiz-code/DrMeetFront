import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Image, Link } from "@nextui-org/react";
import { ToShamsiDate, toPersianDigits } from "@/helper/dateTimeHelper";
import { IGetHomeBlogs } from "@/services/home/interface/getHomeBlogs";

interface IProps {
  articles: IGetHomeBlogs[];
}

const Articles: FC<IProps> = ({ articles }) => {
  return (
    <div>
      <Grid container className="w-full lg:px-16 py-10">
        <Grid item xs={12} className="mb-10">
          <h1 className="text-center text-[1.5rem] font-bold">مقالات</h1>
        </Grid>
        <Grid item xs={12}>
          <Swiper
            className="flex justify-center items-center w-full"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {articles.map((item, index) => (
              <SwiperSlide className="p-4">
                <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Box className="flex justify-center items-center">
                    <Image
                      src="/images/noPhoto.png"
                      className="!w-full !h-48"
                    />
                  </Box>
                  <h5 className="text-[1rem] mt-2">
                    {item.title}
                    {/* لورم اپسوم چیست */}
                  </h5>
                  <Box className="mb-4 flex justify-between items-center">
                    <h6 className="text-[0.7rem] text-gray-500">
                      <span>نویسنده: </span>
                      <span>مدیر سایت</span>
                    </h6>
                    <h6 className="text-[0.7rem] text-gray-500">
                      {/* <span>{ToShamsiDate(item.createDate, "date")}</span> */}
                      <span>{toPersianDigits("1402/10/23")}</span>
                    </h6>
                  </Box>
                  <h6 className="text-gray-600 text-[0.9rem]">
                    اگر شما یک طراح هستین و یا با طراحی هاي گرافیکی سروکار دارید
                    به متن هاي برخورده اید که با نام لورم ایپسوم شناخته .میشوند
                  </h6>
                </CardContent>
                  <CardActions className="flex justify-end px-4">
                    <Link
                      href="#"
                      className="text-black text-[1rem] hover:text-[#007dfe] hover:underline"
                    >
                      مشاهده
                    </Link>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Image, Link } from "@nextui-org/react";
import { toPersianDigits } from "@/helper/dateTimeHelper";

const Portfolio = () => {
  return (
    <div className="my-4">
      <Grid container className="w-full py-5">
        <Grid item xs={12} className="mb-4 text-center">
          <h2 className="font-bold">تصاویر / نمونه کار</h2>
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
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="/images/noPhoto.png"
                      className="!w-full !h-48"
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;

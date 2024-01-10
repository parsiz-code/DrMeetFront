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
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Image, Link } from "@nextui-org/react";
import { toPersianDigits } from "@/helper/dateTimeHelper";

function DoctorArticles() {
  return (
    <div>
      <Grid container className="w-full py-5">
        <Grid item xs={12} className="mb-4 text-center">
          <h2 className="font-bold">مقالات</h2>
        </Grid>
        <Grid item xs={12}>
          <Swiper
            slidesPerView={3}
            className="flex justify-center items-center w-full"
          >
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="https://picsum.photos/400/200"
                    height={200}
                    width={400}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[1rem] mt-2"
                  >
                    لورم اپسوم چیست
                  </Typography>
                  <Box className="mb-4 flex justify-between items-center">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>نویسنده: </span>
                      <span>مدیر سایت</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>{toPersianDigits("1402/10/19")}</span>
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    lineHeight={1.7}
                  >
                    اگر شما یک طراح هستین و یا با طراحی هاي گرافیکی سروکار دارید
                    به متن هاي برخورده اید که با نام لورم ایپسوم شناخته .میشوند
                  </Typography>
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
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="https://picsum.photos/400/200"
                    height={200}
                    width={400}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[1rem] mt-2"
                  >
                    لورم اپسوم چیست
                  </Typography>
                  <Box className="mb-4 flex justify-between items-center">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>نویسنده: </span>
                      <span>مدیر سایت</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>{toPersianDigits("1402/10/19")}</span>
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    lineHeight={1.7}
                  >
                    اگر شما یک طراح هستین و یا با طراحی هاي گرافیکی سروکار دارید
                    به متن هاي برخورده اید که با نام لورم ایپسوم شناخته .میشوند
                  </Typography>
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
            <SwiperSlide className="p-4">
              <Card className="shadow rounded-2xl">
                <CardContent className="">
                  <Image
                    src="https://picsum.photos/400/200"
                    height={200}
                    width={400}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[1rem] mt-2"
                  >
                    لورم اپسوم چیست
                  </Typography>
                  <Box className="mb-4 flex justify-between items-center">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>نویسنده: </span>
                      <span>مدیر سایت</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text-[0.7rem]"
                    >
                      <span>{toPersianDigits("1402/10/19")}</span>
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    lineHeight={1.7}
                  >
                    اگر شما یک طراح هستین و یا با طراحی هاي گرافیکی سروکار دارید
                    به متن هاي برخورده اید که با نام لورم ایپسوم شناخته .میشوند
                  </Typography>
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
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DoctorArticles;

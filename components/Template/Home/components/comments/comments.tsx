import { Box, Grid } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Button, Image } from "@nextui-org/react";
import CommentItem from "./commentItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { toPersianDigits } from "@/helper/dateTimeHelper";

function Comments() {
  const swiperAction = useSwiper();

  const proviousSlide = () => {
    console.log(swiperAction);
    swiperAction.slidePrev();
  };

  const nextSlide = () => {
    swiperAction.slideNext();
  };

  return (
    <div>
      <Grid container className="w-full px-36 pt-5 pb-20">
        <Grid
          item
          xs={12}
          className="flex flex-col justify-center items-center mb-3"
        >
          <h2
            className={`${style.striptedBackground} text-[0.8rem] py-1 px-2 text-[#f17732] font-bold`}
          >
            نظرات بیماران
          </h2>
          <h2
            className={`text-[1.8rem] py-1 px-2 text-[#1f2278] font-bold flex flex-col items-center`}
          >
            <span className="">ببینید بیماران</span>
            <span className="">درمورد ما چه می گویند</span>
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="flex justify-center items-center"
        >
          <Image src="/images/testimonials-Img.png" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="flex flex-col justify-center items-center"
        >
          <Box>
            <Swiper slidesPerView={1} className="">
              <SwiperSlide className="pt-10">
                <Box className="relative bg-[#f17732] p-10 rounded-r-[3rem] rounded-bl-[3rem]">
                  <Box className="absolute bg-white p-2 rounded-[1rem] shadow-xl shadow-[#f17732] -translate-x-8 -translate-y-20">
                    <FormatQuoteOutlinedIcon className="text-[3rem] text-[#f17732]" />
                  </Box>
                  <p className="text-white text-[0.9rem]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                  <Box className="relative flex justify-between items-center">
                    <Box className="text-white mt-4 self-start">
                      <h2 className="text-[1.2rem]">امیر حبیبی</h2>
                      <h2 className="text-[0.7rem]">بیمار</h2>
                    </Box>
                    <Box className="">
                      <FormatQuoteOutlinedIcon className="absolute text-[8rem] p-0 m-0 text-[#fff6] rotate-180 translate-x-28 -translate-y-16" />
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box>
            <Box className="flex !flex-row justify-center items-center mt-7 gap-[28rem]">
              <Box className="flex items-center gap-2 contents-start">
                <button
                  onClick={nextSlide}
                  className="bg-[#ffe3d5] py-2 px-3 rounded-md"
                >
                  <EastIcon className="text-[#f17732] text-[1.2rem]" />
                </button>
                <button
                  onClick={proviousSlide}
                  className="bg-[#ffe3d5] py-2 px-3 rounded-md"
                >
                  <KeyboardBackspaceIcon className="text-[#f17732] text-[1.2rem]" />
                </button>
              </Box>
              <Box className="contents-end">
                <h3 className="text-[#f17732]">
                  <span className="text-[0.8rem]">{toPersianDigits(6)}/</span>
                  <span className="text-[1.2rem]">{toPersianDigits(1)}</span>
                </h3>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Comments;

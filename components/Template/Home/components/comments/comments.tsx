import { Box, Grid } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Button, Image } from "@nextui-org/react";
import CommentItem from "./commentItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
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
      <Grid container className="w-full px-3 lg:px-36 pt-5 pb-20">
        <Grid
          item
          xs={12}
          className="flex !flex-col justify-center items-center !mb-5"
        >
          <h2
            className={`${style.striptedBackground} text-[0.8rem] py-1 px-2 text-[#f17732] font-bold`}
          >
            نظرات بیماران
          </h2>
          <h2
            className={`text-[1.8rem] py-1 px-2 text-[#1f2278] font-bold flex !flex-col items-center`}
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
          className="flex !flex-col !justify-center !items-center mt-10 lg:mt-0 w-full"
        >
          <div>
            <Swiper
              className="!w-full p-20"
              effect={"cards"}
              grabCursor={true}
              loop={true}
              modules={[EffectCards]}
            >
              <SwiperSlide className="mt-10 !w-full">
                <div className="bg-[#f17732] px-10 pt-10 rounded-r-[3rem] rounded-bl-[3rem] w-full">
                  <div className="bg-white p-2 rounded-[1rem] shadow-xl shadow-[#f17732] -translate-x-8 -translate-y-20 w-16">
                    <FormatQuoteOutlinedIcon className="text-[3rem] text-[#f17732]" />
                  </div>
                  <p className="text-white text-[0.9rem] -translate-y-14">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                  <div className="relative flex justify-between items-center">
                    <div className="text-white mt-4 self-start">
                      <h2 className="text-[1.2rem]">امیر حبیبی</h2>
                      <h2 className="text-[0.7rem]">بیمار</h2>
                    </div>
                    <div className="">
                      <FormatQuoteOutlinedIcon className="text-[8rem] p-0 m-0 text-[#fff6] rotate-180 translate-x-0 -translate-y-8" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
          <div className="flex !flex-row !justify-between !items-center mt-7 w-full">
            <div className="flex items-center gap-2">
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
            </div>
            <div className="">
              <h3 className="text-[#f17732]">
                <span className="text-[0.8rem]">{toPersianDigits(6)}/</span>
                <span className="text-[1.2rem]">{toPersianDigits(1)}</span>
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Comments;

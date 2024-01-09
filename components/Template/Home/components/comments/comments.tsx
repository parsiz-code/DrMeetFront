import { Box, Grid } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Image } from "@nextui-org/react";
import CommentItem from "./commentItem";
// import Navigation, Pagination from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Comments() {
  return (
    <div>
      <Grid container className="w-full px-16 pt-5 pb-20">
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
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box>
            <Swiper
            //   pagination={{
            //     type: "fraction",
            //   }}
            //   navigation={true}
            //   modules={[Pagination, Navigation]}
              className=""
            >
              <CommentItem />
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Comments;

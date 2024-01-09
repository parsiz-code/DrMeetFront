import { Box } from '@mui/material'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

function CommentItem() {
  return (
    <SwiperSlide>
      <Box className="relative bg-[#f17732]">
        <Box className="absolute">
          <FormatQuoteOutlinedIcon/>
        </Box>
        Slide 1
      </Box>
    </SwiperSlide>
  )
}

export default CommentItem
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Box className="w-full px-16">
        <Grid container className="colorBackground90 px-10 py-6 rounded-2xl">
            <Grid item xs={12} sm={12} md={8} lg={8} className="flex justify-center items-center">
                <Box>
                    <p className="flex flex-col justify-center items-start p-10">
                        <span className="text-white text-[1.2rem] font-bold mb-2">مشاوره پزشکان</span>
                        <span className="text-white text-[0.9rem]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان</span>
                    </p>
                </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} className="flex justify-center items-center">
                <Image alt="bannerImage" width={300} height={300} src='/images/health.png'/>
            </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;

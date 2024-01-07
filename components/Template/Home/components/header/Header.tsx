import { Box, Grid } from "@mui/material";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Grid container className="w-full px-16 mb-5">
      <Grid item xs={12} sm={12} md={6} lg={6} className="">
        <Box className="flex justify-center items-center h-full flex-col">
          <Image alt="logo" src="/images/drmeet.png" width={200} height={200} />
          <Button  className="bg-[#00DAF5] text-white px-6 text-[0.9rem]">جستجوی سریع پزشکان</Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className="">
        <Box className="bg-[#009BE0] pt-28 pb-14 rounded-b-[3rem] text-center p-16">
          <p className="flex justify-center items-center gap-3 flex-col text-white rounded-lg text-[1.5rem] mb-10">
            <span> در هر زمان و هر مکان با پزشک خود در ارتباط باشید</span>
            <span className="!font-bold">
              هم اکنون با پزشکان آنلاین مشورت کنید
            </span>
            <span>
              با پزشک خود در مورد یک تماس ویدیویی/صوتی خصوصی به راحتی از خانه خود
              مشورت کنید
            </span>
          </p>
          <Box className="p-2 mb-2">
            <Input size="sm" fullWidth className="py-1" radius="full" />
          </Box>
          <Button className="bg-[#005EBD] text-white text-[1rem] px-8 font-bold" radius="full">
            جستجو
          </Button>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
};

export default Header;

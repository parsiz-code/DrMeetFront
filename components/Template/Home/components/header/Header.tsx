import { Box, Grid } from "@mui/material";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Grid container className="w-full px-2 md:px-24 mb-5">
        <Grid item xs={12} sm={12} md={5} lg={5} className="mb-10 md:mb-0">
          <Box className="flex justify-center items-center h-full flex-col">
            <Image
              alt="logo"
              src="/images/drmeet.png"
              width={200}
              height={200}
            />
            <Button className="bg-[#00DAF5] text-white w-48 mb-2 text-[0.9rem]">
              جستجوی سریع پزشکان
            </Button>
            <Button className="bg-transparent text-[#00DAF5] border border-[#00DAF5] w-48 text-[0.9rem]">
              نظردهی به پزشک
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} className="">
          <Box className="bg-[#009BE0] pt-10 md:pt-48 px-10 md:px-24 pb-10 md:pb-14 rounded-[3rem] md:!rounded-b-[3rem] md:!rounded-t-[0rem] text-center h-96 md:h-[40rem]">
            <p className="flex justify-center items-center gap-3 flex-col text-white rounded-lg text-[1rem] md:text-[1.5rem] mb-10">
              <span> در هر زمان و هر مکان با پزشک خود در ارتباط باشید</span>
              <span className="!font-bold">
                هم اکنون با پزشکان آنلاین مشورت کنید
              </span>
              <span>
                با پزشک خود در مورد یک تماس ویدیویی/صوتی خصوصی به راحتی از خانه
                خود مشورت کنید
              </span>
            </p>
            <Box className="p-2 mb-2">
              <Input size="sm" fullWidth className="py-1" radius="full" />
            </Box>
            <Button
              className="bg-[#005EBD] text-white text-[1rem] px-8 font-bold"
              radius="full"
            >
              جستجو
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

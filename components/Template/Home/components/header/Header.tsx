import { Box, Grid } from "@mui/material";
import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const route = useRouter();

  const searchHandler = () => {
    if (searchValue.trim()) {
      route.push(`/doctors?q=${searchValue}`);
    }
  };

  const searchHandlerWithEnter = (e: any) => {
    if (e.keyCode === 13) {
      if (searchValue.trim()) {
        route.push(`/doctors?q=${searchValue}`);
      }
    }
  };

  return (
    <div>
      <Grid container className="w-full px-2 lg:px-24 !mb-5">
        <Grid item xs={12} sm={12} md={5} lg={5} className="mb-10 lg:mb-0">
          <Box className="flex justify-center items-center h-full flex-col">
            <Image
              alt="logo"
              src="/images/drmeet.png"
              width={200}
              height={200}
            />
            <Link
              href="/doctors"
              className="bg-[#00DAF5] text-white w-48 mb-2 text-[0.9rem] flex justify-center items-center py-2 rounded-xl"
            >
              نمایش کل پزشکان
            </Link>
            <Link
              href=""
              className="bg-transparent text-[#00DAF5] border border-[#00DAF5] w-48 text-[0.9rem] flex justify-center items-center py-2 rounded-xl"
            >
              نظردهی به پزشک
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} className="mt-4 lg:mt-0">
          <Box className="bg-[#009BE0] pt-10 lg:pt-48 px-10 lg:px-24 pb-10 lg:pb-14 rounded-[3rem] lg:!rounded-b-[3rem] lg:!rounded-t-[0rem] text-center h-96 lg:h-[40rem]">
            <p className="flex justify-center items-center gap-3 flex-col text-white rounded-lg text-[1rem] lg:text-[1.5rem] mb-10">
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
              <Input
                size="sm"
                fullWidth
                className="py-1"
                radius="full"
                value={searchValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(event.target.value);
                }}
                onKeyDown={searchHandlerWithEnter}
              />
            </Box>
            <Button
              className="bg-[#005EBD] text-white text-[1rem] px-8 font-bold"
              radius="full"
              onClick={searchHandler}
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

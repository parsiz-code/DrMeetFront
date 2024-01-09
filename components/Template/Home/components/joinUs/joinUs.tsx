import { Box, Grid } from "@mui/material";
import { Button, Image } from "@nextui-org/react";
import React from "react";

function JoinUs() {
  return (
    <div>
      <Grid container className="py-20">
        <Grid item xs={12} className="flex justify-center items-center">
          <h2 className="text-white bg-[#007dfe] py-3 px-10 rounded-lg">
            به ما بپیوندید
          </h2>
        </Grid>
        <Grid item xs={12} className="flex justify-center items-center">
          <Box className="flex justify-center items-center">
            <Button href="#" className="px-12 py-7 bg-[#00daf5] text-white !rounded-0 !rounded-r-xl" radius="none">ثبت نام بیمار</Button>
            <Image
              src="/images/Image 48.png"
              className="w-96"
            />
            <Button href="#" className="px-12 py-7 bg-[#005ebd] text-white !rounded-0 !rounded-l-xl" radius="none">ثبت نام پزشک</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default JoinUs;

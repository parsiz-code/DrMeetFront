import { Grid } from "@mui/material";
import { Image, Link } from "@nextui-org/react";
import React, { FC } from "react";

const DoctorNavbar = () => {
  return (
    <div>
      <Grid container className="px-2 lg:px-5 !pb-6">
        <Grid item xs={12} className="flex items-center justify-center lg:justify-start gap-10 lg:gap-[8rem] py-2 px-10 bg-[#0095de] rounded-xl">
          <Link className="text-white" href="/">صفحه اصلی</Link>
          <Link className="text-white" href="/about"> درباره</Link>
          <Link className="text-white" href="/callUs">تماس با ما</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorNavbar;

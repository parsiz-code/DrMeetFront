import { FormControl, Grid, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <div>
      <Grid container className="w-full px-2 lg:px-16 pb-4 pt-10 bg-[#172B65]">
        <Grid item container xs={12} className="mb-10 lg:px-20">
          <Grid item xs={12} sm={12} md={6} lg={4} className="text-white">
            <h2 className="text-[1rem] mb-2">عضویت در خبرنامه</h2>
            <h2 className="text-[0.8rem]">
              اولین کسی باشید که پیشنهادات ویژه و رویدادهای مارا می بیند
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="text-white flex justify-center items-center"
          >
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                type="text"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <TelegramIcon/>
                      </InputAdornment>
                    ),
                  }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            className="text-white flex justify-center items-center"
          ></Grid>
        </Grid>
        <Grid item container xs={12} className="mb-16 lg:px-20">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="text-white"
          ></Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} className="text-white"></Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} className="text-white"></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            className="text-white"
          ></Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          className="text-white flex justify-center items-center py-2 rounded-full bg-[#0C1B46]"
        >
          <h2 className="text-center">
            تمام حقوق این سایت متعلق به راهکار های نرم افزاری اباک میباشد.
          </h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

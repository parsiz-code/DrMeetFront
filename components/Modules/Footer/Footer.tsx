import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { toast } from "react-toastify";
import { Button, Divider, Image } from "@nextui-org/react";

function Footer() {
  const [newsLatterInputValue, setNewsLatterInputValue] = useState<string>("");

  const addIntoNewsLatter = () => {
    toast.success("با موفقیت افزوده شدید", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // if (newsLatterInputValue !== "") {
    // }
  };
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
            <FormControl
              fullWidth
              sx={{ border: "none", outline: "none", boxShadow: "none" }}
            >
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "3rem",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  "& fieldset": { border: "none" },
                }}
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                value={newsLatterInputValue}
                onChange={(e) => setNewsLatterInputValue(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => addIntoNewsLatter()}
                        edge="end"
                      >
                        <TelegramIcon />
                      </IconButton>
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
            className="text-white flex justify-end items-center"
          >
            <div className="flex items-center justify-center gap-3">
              <Button href="#" isIconOnly radius="full" color="default" className="">
                <Image src="/images/socials/facebook.png" className="p-3"/>
              </Button>
              <Button href="#" isIconOnly radius="full" color="default" className="" >
                <Image src="/images/socials/instagram.png" className="p-3"/>
              </Button>
              <Button href="#" isIconOnly radius="full" color="default" className="" >
                <Image src="/images/socials/whatsapp.png" className="p-3"/>
              </Button>
              <Button href="#" isIconOnly radius="full" color="default" className="" >
                <Image src="/images/socials/telegram.png" className="p-3"/>
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="text-white flex justify-center items-center"
        >
          <Divider className="bg-white" />
        </Grid>

        <Grid item container xs={12} className="mb-16 lg:px-20">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="text-white"
          >
            
          </Grid>
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

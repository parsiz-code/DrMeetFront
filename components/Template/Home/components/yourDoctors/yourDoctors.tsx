import { Box, Grid } from "@mui/material";
import { Button, Link, User } from "@nextui-org/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import OptionsLine from "../options/options";
import style from "./yourDoctor.module.css";
import DoctorItem from "./doctorItem";
import { IGetHomeFeatures } from "@/services/home/interface/getHomeFeatures";
import { FC } from "react";
import ButtonUI from "@/components/Modules/ButtonUI/ButtonUI";

interface IProps {
  features: IGetHomeFeatures[];
}

const YourDoctors: FC<IProps> = ({ features }) => {
  return (
    <div className="relative w-full bg-slate-200">
      <div className="lg:absolute -top-10 w-full">
        <OptionsLine options={features} />
      </div>
      <Grid container className="w-full px-2 lg:px-16 py-16 lg:py-32">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="mb-10 text-center"
        >
          <h1 className="text-center text-[1.5rem] font-bold">
            پزشکان همراه شما
          </h1>
        </Grid>
        <Grid item container xs={12} sm={12} md={6} lg={6}>
          <Grid item xs={12} className="text-center">
            <span className="text-gray-500">فعال ترین پزشکان</span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="p-10 flex !flex-col gap-2 justify-start"
          >
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="w-full flex justify-center items-center"
          >
            <ButtonUI
              title="لیست فعال ترین پزشکان"
              className="bg-[#007dfe] text-white w-56 px-4 text-[0.9rem] "
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="mt-14 lg:mt-0"
        >
          <Grid item xs={12} className="text-center">
            <span className="text-gray-500">جدید ترین پزشکان</span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="p-10 flex !flex-col gap-2 justify-start"
          >
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
            <DoctorItem />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="w-full flex justify-center items-center"
          >
            <ButtonUI
              title="لیست جدید ترین پزشکان"
              className="bg-[#007dfe] text-white w-56 px-4 text-[0.9rem] "
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default YourDoctors;

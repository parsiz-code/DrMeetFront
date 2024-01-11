import Breadcrumb from "@/components/Modules/BreadCrumb";
import React, { FC } from "react";
import DoctorDetailBar from "./doctorDetailBar/doctorDetailBar";
import { Grid } from "@mui/material";
import DoctorAbout from "./doctorAbout/doctorAbout";
import OurServices from "./ourServices/ourServices";
import DoctorArticles from "./articles/articles";
import Biography from "./biography/biography";
import DoctorProgress from "./doctorProgress/doctorProgress";
import DoctorComments from "./comments/comments";
import NearReserve from "./nearestReserve/nearestReserve";
import HelpInReserve from "./helpInReserve/helpInReserve";
import CouncilRate from "./councilRate/councilRate";
import DoctorAddress from "./doctorAddress/doctorAddress";
import DoctorMapAddress from "./doctorMapAddress/doctorMapAddress";
import SuggestionBox from "./suggestionBox/suggestionBox";
import QuestionDoctor from "./Question/Question";
import Portfolio from "./portFolio/portfolio";

interface IProps {
  doctorName: string;
}

const DoctorOfficialPage: FC<IProps> = ({ doctorName }) => {
  return (
    <div className="mx-auto min-w-xl px-2 sm:px-6 lg:px-8">
      {/* <Breadcrumb
        prevRoutes={[
          { path: "/", title: "دکترمیت" },
          { path: "/doctors", title: "دکتر ها" },
        ]}
        currentRoute={doctorName}
      /> */}
      <DoctorDetailBar doctorName={doctorName} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <DoctorAbout doctorName={doctorName} rating={5} />
          <OurServices />
          <DoctorArticles />
          <Biography />
          <DoctorProgress/>
          <DoctorComments/>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <NearReserve/>
          <HelpInReserve/>
          <CouncilRate/>
          <DoctorAddress/>
          <DoctorMapAddress/>
          <SuggestionBox/>
        </Grid>
        <Grid item xs={12}>
          <QuestionDoctor/>
        </Grid>
        <Grid item xs={12}>
          <Portfolio/>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorOfficialPage;

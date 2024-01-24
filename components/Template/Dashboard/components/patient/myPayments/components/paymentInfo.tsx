import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

type State = {
  common: {
    darkTheme: boolean;
  };
};

const PaymentInfo = () => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <Grid item xs={12} className="pb-2">
      <div className={`${darkTheme ? "darkElem" : "bg-white"}`}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} className="p-2">
            <div
              className={`${
                darkTheme ? "text-white" : "text-black"
              } flex items-center gap-2`}
            >
              <h6></h6>
              <h6></h6>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} className="p-2">
            <div
              className={`${
                darkTheme ? "text-white" : "text-black"
              } flex items-center gap-2`}
            >
              <h6></h6>
              <h6></h6>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} className="p-2">
            <div
              className={`${
                darkTheme ? "text-white" : "text-black"
              } flex items-center gap-2`}
            >
              <h6></h6>
              <h6></h6>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default PaymentInfo;

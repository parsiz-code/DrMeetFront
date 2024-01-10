import { Grid } from "@mui/material";
import { Progress } from "@nextui-org/react";

const DoctorProgress = () => {
  return (
    <div>
      <Grid container className="my-4 py-5 px-6 rounded-xl border">
        <Grid item xs={12} className="mb-4 w-full">
          <h2 className="font-bold py-2">نظرات درمورد</h2>
        </Grid>
        <Grid item xs={12} className="">
          <div>
            <Progress
              label="برخورد مناسب"
              value={3.5}
              maxValue={5}
              size="md"
              color="success"
              formatOptions={{ style: "currency", currency: "ARS" }}
              showValueLabel={true}
              className="max-w-md"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorProgress;

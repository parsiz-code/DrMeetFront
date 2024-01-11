import { toPersianDigits } from "@/helper/dateTimeHelper";
import { CircularProgress, Grid } from "@mui/material";
import { Progress } from "@nextui-org/react";
import { FC } from "react";

interface IProps {
  firstValue?: number;
  seccondValue?: number;
  thirdValue?: number;
  fourthValue?: number;
}

const DoctorProgress: FC<IProps> = ({
  firstValue = 4,
  seccondValue = 3,thirdValue = 2,
  fourthValue = 4.7,
}) => {
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
              value={firstValue}
              maxValue={5}
              size="md"
              color="success"
              // formatOptions={{ style: "currency", currency: "ARS" }}
              valueLabel={toPersianDigits((firstValue * 100) / 5) + "%"}
              showValueLabel={true}
              className="mb-4"
              classNames={{
                track: "rotate-180",
              }}
            />
            <Progress
              label="کیفیت درمان"
              value={seccondValue}
              maxValue={5}
              size="md"
              color="success"
              // formatOptions={{ style: "currency", currency: "ARS" }}
              valueLabel={toPersianDigits((seccondValue * 100) / 5) + "%"}
              showValueLabel={true}
              className="mb-4"
              classNames={{
                track: "rotate-180",
              }}
            />
            <Progress
              label="صرفه اقتصادی"
              value={thirdValue}
              maxValue={5}
              size="md"
              color="success"
              // formatOptions={{ style: "currency", currency: "ARS" }}
              valueLabel={toPersianDigits((thirdValue * 100) / 5) + "%"}
              showValueLabel={true}
              className="mb-4"
              classNames={{
                track: "rotate-180",
              }}
            />
            <Progress
              label="بهبودی بیمار"
              value={fourthValue}
              maxValue={5}
              size="md"
              color="success"
              // formatOptions={{ style: "currency", currency: "ARS" }}
              valueLabel={toPersianDigits((fourthValue * 100) / 5) + "%"}
              showValueLabel={true}
              className="mb-4"
              classNames={{
                track: "rotate-180",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorProgress;

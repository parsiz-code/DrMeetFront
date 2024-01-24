import { Grid } from "@mui/material";
import { Select, SelectItem } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { FcMoneyTransfer } from "react-icons/fc";

type State = {
  common: {
    darkTheme: boolean;
  };
};
const NewPayment = () => {
  const { darkTheme } = useSelector((state: State) => state.common);
  return (
    <Grid item xs={12} sm={12} md={5} lg={5} className="p-2">
      <div className={`${darkTheme ? "darkElem" : "bg-white"} p-2 rounded-lg`}>
        <h6
          className={`text-black bg-gray-200 py-2 rounded-lg w-full text-center`}
        >
          افزایش موجودی
        </h6>
        <FcMoneyTransfer className="h-20"/>
        <div className="">
          {/* <Select label="مقادیر پیشنهادی">
            <SelectItem value={1}>test 1</SelectItem>
            <SelectItem value={2}>test 2</SelectItem>
            <SelectItem value={3}>test 3</SelectItem>
          </Select> */}
        </div>
      </div>
    </Grid>
  );
};

export default NewPayment;

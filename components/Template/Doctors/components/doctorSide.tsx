import { Grid } from "@mui/material";
import DoctorItem from "./doctorItem";

const DoctorSide = () => {
  return (
    <Grid item xs={12} sm={12} md={8.5} lg={8.5} className="p-2">
      <div className="w-full flex bg-gray-100 rounded-xl p-4 gap-5 mb-2">
        <h6 className="font-thin text-gray-500 hover:cursor-default">ترتیب نمایش</h6>
        <button className="font-thin hover:text-gray-500">پیشفرض</button>
        <button className="font-thin hover:text-gray-500">بیشترین امتیاز</button>
        <button className="font-thin hover:text-gray-500">نزدیکترین نوبت</button>
        <button className="font-thin hover:text-gray-500">کمترین تعرفه</button>
      </div>
      <div className="">
        <DoctorItem/>
      </div>
    </Grid>
  );
};

export default DoctorSide;

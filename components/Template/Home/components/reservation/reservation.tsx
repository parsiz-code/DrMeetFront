import DatePickerJalaliUiKit from "@/components/Modules/DatePickerJalali/datePicker";
import {
  Box,
  FormControl,
  Grid,
  SelectChangeEvent,
  MenuItem,
  Select,
} from "@mui/material";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import style from './style.module.css'

interface IItem {
  label: string;
  value: string;
}

const Reservation = () => {
  const [reserveTime, setReserveTime] = useState<Date>();
  const [selectedExpertise, setSelectedExpertise] = useState<string>('0');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('0');

  const data: IItem[] = [
    {
      label: "مغز و اعصاب",
      value: "brain",
    },
    {
      label: "گوش و حلق و بینی",
      value: "eye",
    },
    {
      label: "شنوایی سنجی",
      value: "audiologists",
    },
  ];

  const doctorData: IItem[] = [
    {
      label: "محمد محمدی",
      value: "mohammadMohammadi",
    },
    {
      label: "حسین حسینی",
      value: "hoseinHoseini",
    },
    {
      label: "امیر امیری",
      value: "amirAmiri",
    },
  ];

  const handleChangeExpertise = (event: SelectChangeEvent) => {
    setSelectedExpertise(event.target.value);
  };
  const handleChangeDoctor = (event: SelectChangeEvent) => {
    setSelectedDoctor(event.target.value);
  };

  return (
    <div className="!bg-[#d4d3d3]">
      <Grid container className=" w-full px-16">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="flex justify-center items-center h-30 md:h-[30rem] bg-transparent"
        >
          <h2 className="text-[1.5rem] font-bold w-72 text-center translate-x-0 md:translate-x-16">
            با خدمات پزشکی آنلاین سلامتی خود را تضمین کنید
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={`relative w-full overflow bg-transparent p-5`}>
          <div className={`h-[32rem] bg-[#007dfe] flex flex-col items-center gap-3 w-full px-20 pt-20 pb-24 rounded-lg`}>
            <Input type="text" placeholder="نام و نام خانوادگی" size="sm" className="py-1" />
            <DatePickerJalaliUiKit
              disablePast={false}
              value={reserveTime}
              onChange={(s) => setReserveTime(s)}
              label="تاریخ رزرو"
            />
            <FormControl fullWidth size="small">
              <Select
                value={selectedExpertise}
                onChange={handleChangeExpertise}
                className="py-1 rounded-lg"
                sx={{
                  backgroundColor: '#fff'
                }}
              >
                <MenuItem value="0" className="text-gray-500" disabled={true}>انتخاب تخصص</MenuItem>
                {data.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <Select
                value={selectedDoctor}
                onChange={handleChangeDoctor}
                className="py-1 rounded-lg"
                sx={{
                  backgroundColor: '#fff'
                }}
              >
                <MenuItem value="0" className="text-gray-500" disabled={true}>انتخاب پزشک</MenuItem>
                {doctorData.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Input type="text" placeholder="پیام شما" size="sm" />

            <Button className="bg-[#a3d1ff] px-20 py-5">رزرو قرار ملاقات</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reservation;

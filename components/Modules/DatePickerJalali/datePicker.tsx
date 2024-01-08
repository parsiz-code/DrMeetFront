import { Box, InputLabel, TextField } from "@mui/material";
import React, { FC } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface IProps {
  onChange: (value: Date) => void;
  value?: any;
  disablePast?: boolean | undefined;
  disabled?: boolean | undefined;
  label?: string;
  className?: string;
  minDate?: string;
  maxDate?: string;
}

const DatePickerJalaliUiKit: FC<IProps> = ({
  disablePast = true,
  disabled,
  onChange,
  value,
  label,
  className,
  maxDate,
  minDate,
  ...props
}) => {
  return (
    <Box
      className={`${className} relative !rmdp-container`}
    >
      {label && (
        <InputLabel className="!absolute !top-[-1.1rem] !right-2 z-100 !px-1 !bg-inherit !text-[0.8rem]">
          {label}
        </InputLabel>
      )}
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={new DateObject(value)}
        onChange={(val: DateObject) => {
          onChange(new Date(new Date(val?.toDate()).setHours(20, 30)));
        }}
        format="YYYY/MM/DD"
        minDate={
          disablePast
            ? new DateObject().set("day", new Date().getDate())
            : minDate
            ? minDate
            : undefined
        }
        maxDate={maxDate ? maxDate : undefined}
        disabled={disabled}
        className={`${className}`}
      />
    </Box>
  );
};

export default DatePickerJalaliUiKit;

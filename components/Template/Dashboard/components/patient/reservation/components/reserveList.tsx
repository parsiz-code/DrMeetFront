import {
  ToShamsiDate,
  toPersianDayWeek,
  toPersianDigits,
  twoDigitTime,
} from "@/helper/dateTimeHelper";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button, Spinner } from "@nextui-org/react";
import { usePatientReservationRecord } from "../context";
import DataWaiter from "@/components/Modules/DataWaiter/DataWaiter";
import NoFoundData from "@/components/Modules/NotFoundData/NotFoundData";

type State = {
  common: {
    darkTheme: boolean;
    dashboardType:
      | "patient"
      | "doctor"
      | "doctorAdmin"
      | "superAdmin"
      | undefined;
  };
};

const columns = [
  {
    key: "id",
    label: "ردیف",
  },
  {
    key: "day",
    label: "روز",
  },
  {
    key: "Date",
    label: "تاریخ",
  },
  {
    key: "time",
    label: "زمان",
  },
  {
    key: "doctor",
    label: "نام پزشک",
  },
  {
    key: "center",
    label: "مرکز",
  },
];

const ReservesTable = () => {
  const { dashboardType, darkTheme } = useSelector(
    (state: State) => state.common
  );

  const { loading, allReservedData } = usePatientReservationRecord();

  return (
    <div>
      {allReservedData !== undefined && allReservedData.length > 0 && (
        <TableContainer component={Paper} style={{ height: 600, width: '100%' }}>
          <Table
            sx={{ minWidth: 650 }}
            className={`${darkTheme ? "darkElem text-white" : "bg-white"}`}
          >
            <TableHead>
              <TableRow className="bg-blue-500">
                {columns.map((item) => (
                  <TableCell
                    className={`!text-white !font-bold !text-[1.1rem]`}
                    align="center"
                    key={item.key}
                  >
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {allReservedData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fee2e2" } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                  >
                    {toPersianDigits(index + 1)}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                    align="center"
                  >
                    {toPersianDayWeek(new Date(item.date))}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                    align="center"
                  >
                    {ToShamsiDate(item.date, "date")}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                    align="center"
                  >
                    {toPersianDigits(item.time.substring(0, 5))}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                    align="center"
                  >
                    {item.doctorName}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white !text-[0.95rem]" : "text-black !text-[0.95rem]"}
                    align="center"
                  >
                    {item.center}
                  </TableCell>
                  {/* <TableCell
                    className={darkTheme ? "!text-white" : "text-black"}
                    align="center"
                  >
                    <Button
                      isIconOnly
                      className={`bg-transparent rounded-full ${
                        darkTheme ? "text-white" : "text-black"
                      }`}
                    >
                      <DescriptionIcon className="text-[0.5rem]" />
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {loading && <DataWaiter />}
      {allReservedData?.length <= 0 && (
        <NoFoundData title="تاکنون سابقه مراجعه ای نداشته اید." />
      )}
    </div>
  );
};
export default ReservesTable;

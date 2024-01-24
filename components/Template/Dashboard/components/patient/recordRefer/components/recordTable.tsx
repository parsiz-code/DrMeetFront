import { ToShamsiDate, toPersianDigits } from "@/helper/dateTimeHelper";
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
import { usePatientRecordsRefer } from "../context";
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
    key: "doctor",
    label: "نام دکتر",
  },
  {
    key: "clinic",
    label: "نام مطب",
  },
  {
    key: "insurance",
    label: "بیمه",
  },
  {
    key: "visitDate",
    label: "تاریخ ویزیت",
  },
  {
    key: "prescription",
    label: "نسخه",
  },
];

const RecordTable = () => {
  const { dashboardType, darkTheme } = useSelector(
    (state: State) => state.common
  );

  const { loading, allReceptions } = usePatientRecordsRefer();

  return (
    <div>
      <TableContainer component={Paper} style={{ height: 600, width: '100%' }}>
        <Table
          sx={{ minWidth: 650 }}
          className={`${darkTheme ? "darkElem text-whit" : "bg-white"}`}
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
            {allReceptions &&
              allReceptions.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fee2e2" } }}
                  
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
                  >
                    {toPersianDigits(index + 1)}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
                    align="center"
                  >
                    {item.doctorName}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
                    align="center"
                  >
                    {item.centerName}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
                    align="center"
                  >
                    {item.insurance}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
                    align="center"
                  >
                    {ToShamsiDate(item.createDate, "date")}
                  </TableCell>
                  <TableCell
                    className={darkTheme ? "!text-white text-[1rem]" : "text-black !text-[1rem]"}
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
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <DataWaiter />}
      {!allReceptions && (
        <NoFoundData title="تاکنون سابقه مراجعه ای نداشته اید." />
      )}
    </div>
  );
};
export default RecordTable;

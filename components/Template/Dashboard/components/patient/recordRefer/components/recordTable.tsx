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
import { Button } from "@nextui-org/react";

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
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        className={`${darkTheme ? "darkElem text-white" : "bg-white"}`}
      >
        <TableHead>
          <TableRow className="bg-blue-500">
            {columns.map((item) => (
              <TableCell
                className={`!text-white !font-bold`}
                align="center"
                key={item.key}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              component="th"
              scope="row"
              align="center"
              className={darkTheme ? "!text-white" : "text-black"}
            >
              {toPersianDigits(1)}
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              سید سجاد حسینی مقدم
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              کلینیک دکتر حسینی مقدم
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              شرکت نفت
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              {toPersianDigits("1402/11/3")}
            </TableCell>
            <TableCell
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
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
              component="th"
              scope="row"
              align="center"
              className={darkTheme ? "!text-white" : "text-black"}
            >
              {toPersianDigits(1)}
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              سید سجاد حسینی مقدم
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              کلینیک دکتر حسینی مقدم
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              شرکت نفت
            </TableCell>
            <TableCell
              className={darkTheme ? "!text-white" : "text-black"}
              align="center"
            >
              {toPersianDigits("1402/11/3")}
            </TableCell>
            <TableCell
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RecordTable;

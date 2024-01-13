import { Grid } from "@mui/material";
import { Pagination, Button } from "@nextui-org/react";
import { useState } from "react";
import DoctorItem from "./doctorItem";

const DoctorList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Grid container>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
        <DoctorItem/>
      </Grid>
      <div className="flex justify-center items-center py-3 gap-2">
        <Button
          size="sm"
          variant="flat"
          color="success"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          قبلی
        </Button>
        <Pagination
          loop
          color="success"
          page={currentPage}
          onChange={setCurrentPage}
          total={10}
          initialPage={1}
          classNames={{
            cursor: '!text-white',
          }}
        />
        <Button
          size="sm"
          variant="flat"
          color="success"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
        >
          بعدی
        </Button>
      </div>
    </div>
  );
};

export default DoctorList;

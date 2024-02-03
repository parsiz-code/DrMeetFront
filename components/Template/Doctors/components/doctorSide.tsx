import { Alert, Grid } from "@mui/material";
import DoctorItem from "./doctorItem";
import { useDoctorsCtx } from "../context";
import { Button, Pagination } from "@nextui-org/react";

const DoctorSide = () => {
  const {
    allDoctorsDataList,
    currentPage,
    setCurrentPage,
    allDoctorsData,
    loading
  } = useDoctorsCtx();
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
        {/* <DoctorItem/> */}
        {allDoctorsDataList.length > 0 ? (
        <>
          <Grid container>
            {allDoctorsDataList.map((item, index) => (
              <DoctorItem
                key={index}
                name={`${item.firstName} ${item.lastName}`}
                description={item.expertise}
                location={item.cityName}
                photo={item.picture}
                doctorId={item.id}
              />
            ))}
          </Grid>
          <div className="flex !flex-col sm:!flex-row justify-center items-center py-3 gap-2">
            <Button
              size="sm"
              variant="flat"
              color="success"
              className="hidden sm:block"
              onPress={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              قبلی
            </Button>
            <Pagination
              loop
              color="success"
              page={currentPage}
              onChange={setCurrentPage}
              total={allDoctorsData!.pagination.totalPages}
              initialPage={1}
              classNames={{
                cursor: "!text-white",
              }}
            />
            <Button
              size="sm"
              variant="flat"
              color="success"
              className="hidden sm:block"
              onPress={() =>
                setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
              }
            >
              بعدی
            </Button>

            <div className="flex sm:hidden gap-3 !mt-2">
              <Button
                size="sm"
                variant="flat"
                color="success"
                className=""
                onPress={() =>
                  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                قبلی
              </Button>
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
        </>
      ) : (
        <>
          {loading ? (
            <div className="w-full flex justify-center items-center mt-20">
              <Alert severity="info">
              در حال دریافت اطلاعات از سرور |  لطفا منتظر بمانید.
              </Alert>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center mt-20">
              <Alert severity="warning">
                متاسفیم! پزشکی بر اساس جستجوی شما یافت نشد.
              </Alert>
            </div>
          )}
        </>
      )}
      </div>
    </Grid>
  );
};

export default DoctorSide;

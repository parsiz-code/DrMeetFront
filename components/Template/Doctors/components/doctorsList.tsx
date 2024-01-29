import { Alert, Divider, Grid } from "@mui/material";
import {
  Pagination,
  Button,
  Input,
  Spinner,
  Progress,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import DoctorItem from "./doctorItem";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from "@mui/icons-material/Clear";
import { useDoctorsCtx } from "../context";
import FilterSideBar from "./filterSide";

const DoctorList = () => {
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const {
    currentPage,
    setCurrentPage,
    loading,
    allDoctorsData,
    allCitiesList,
    allDoctorsDataList,
    searchInputValue,
    setSearchInputValue,
    getCities,
    selectedCity,
    setSelectedCity,
    getDoctors,
    searchCityInputValue,
    setSearchCityInputValue,
  } = useDoctorsCtx();

  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

  const searchHandlerWithEnter = (e: any) => {
    if (e.keyCode === 13) {
      getDoctors(undefined , searchInputValue);
    }
  };

  return (
    <div>
      {/* <div className="px-3 lg:px-64 !my-4">
        <div className="flex justify-center items-center bg-[#f3f4f6] rounded-2xl px-3 gap-3 shadow-xl">
          <Input
            size={"sm"}
            type="text"
            placeholder="جستجو بر اساس نام پزشک/تخصص/کد نظام پزشکی"
            classNames={{
              input:
                "hover:!bg-transparent bg-transparent border-none shadow-none drop-shadow-none outline-0",
              inputWrapper:
                "hover:!bg-transparent bg-transparent border-none shadow-none drop-shadow-none outline-0",
            }}
            disableAnimation
            value={searchInputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInputValue(event.target.value);
            }}
            onKeyDown={searchHandlerWithEnter}
            endContent={
              <>
                {searchInputValue && (
                  <Button
                    className="bg-transparent p-2"
                    size="sm"
                    isIconOnly
                    radius="full"
                    onClick={() => {
                      getDoctors();
                      setSearchInputValue("");
                    }}
                  >
                    <ClearIcon />
                  </Button>
                )}
              </>
            }
          />
          <div className="flex justify-center items-center gap-5">
            <Button
              className="bg-transparent p-2"
              size="sm"
              isIconOnly
              radius="full"
              onClick={() => getDoctors(undefined , searchInputValue)}
            >
              {loading ? <Spinner /> : <SearchIcon />}
            </Button>
            <button
              className="bg-transparent flex !flex-col items-center p-2"
              onClick={() => {
                getCities();
                setOpenLocationModal(true);
              }}
            >
              <LocationOnIcon
                className={`text-blue-800 ${selectedCity && "text-[1.2rem]"}`}
              />
              <h6
                className={`text-[0.75rem] text-center ${
                  selectedCity && "w-20"
                } overflow-hidden`}
              >
                {selectedCity && selectedCity.name}
              </h6>
            </button>
          </div>
        </div>
        <div className="!h-1">
          {loading && (
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="w-100 px-5"
            />
          )}
        </div>
      </div> */}
      <Grid container>
        <FilterSideBar/>
        
      </Grid>
      {/* {allDoctorsDataList.length > 0 ? (
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
      )} */}

      {/* <Modal
        backdrop={"blur"}
        isOpen={openLocationModal}
        onClose={() => setOpenLocationModal(false)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 !mt-4">
                <div className="flex">
                  <LocationOnIcon className="text-blue-800 ml-1" />
                  <h6 className="text-[1rem]">انتخاب شهر</h6>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="overflow-hiden">
                  <Input
                    size={"sm"}
                    type="text"
                    placeholder="جستجو ..."
                    disableAnimation
                    value={searchCityInputValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setSearchCityInputValue(event.target.value);
                      timerID && clearTimeout(timerID);
                      const tId = setTimeout(() => {
                        getCities(event.target.value);
                      }, 1000);
                      setTimerID(tId);
                    }}
                    endContent={
                      <button>
                        <SearchIcon onClick={() => getCities()} />
                      </button>
                    }
                  />
                  <div className="!h-80 overflow-auto !mt-2">
                    {loading && (
                      <div className="w-full h-full flex !justify-center !items-center">
                        <Spinner />
                      </div>
                    )}
                    {!loading &&
                      allCitiesList.map((city) => (
                        <h6
                          key={city.id}
                          className="flex items-center px-3 py-1 rounded-xl !my-2 bg-[#f3f4f6] hover:!cursor-pointer hover:!bg-[#e1e1e1] "
                          onClick={() => {
                            setOpenLocationModal(false);
                            setSelectedCity(city);
                            setSelectedCity(city);
                            getDoctors(city);
                          }}
                        >
                          <span className="w-1/2">{city.stateName}</span>
                          <span className="w-1/2">{city.name}</span>
                        </h6>
                      ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={() => {
                    setSelectedCity(undefined);
                    getDoctors();
                  }}
                >
                  همه شهرها
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default DoctorList;

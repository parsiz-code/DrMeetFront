import { Divider, Grid } from "@mui/material";
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
import { useEffect, useState } from "react";
import DoctorItem from "./doctorItem";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDoctorsCtx } from "../context";

const DoctorList = () => {
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const {
    currentPage,
    setCurrentPage,
    loading,
    allDoctorsData,
    allDoctorsDataList,
  } = useDoctorsCtx();

  useEffect;

  return (
    <div>
      <div className="px-3 lg:px-48 !my-4">
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
          />
          <div className="flex justify-center items-center gap-5">
            <Button
              className="bg-transparent p-2"
              size="sm"
              isIconOnly
              radius="full"
            >
              <SearchIcon />
              {/* <Spinner color="primary"/> */}
            </Button>
            <Button
              className="bg-transparent p-2"
              size="sm"
              isIconOnly
              radius="full"
              onClick={() => setOpenLocationModal(true)}
            >
              <LocationOnIcon className="text-blue-800" />
            </Button>
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
      </div>
      {allDoctorsDataList.length > 0 && (
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
      )}

      <Modal
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
                    endContent={
                      <button>
                        <SearchIcon />
                      </button>
                    }
                  />
                  <div className="!h-80 overflow-auto !mt-2">
                    <h6 className="flex gap-5 items-center px-3 py-1 rounded-xl !my-2 bg-[#f3f4f6]">
                      <span>مازندران</span>-<span>ساری</span>
                    </h6>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DoctorList;

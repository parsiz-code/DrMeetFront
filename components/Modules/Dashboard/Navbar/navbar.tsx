import { Grid } from "@mui/material";
import {
  Avatar,
  Button,
  Divider,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeHandler, dashboardTypeHandler } from "@/store/common";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";

type State = {
  common: {
    darkTheme: boolean;
    dashboardType: Dashboard_Type | undefined;
  };
};

interface IProps {
  isHighAccess: boolean;
}

const DashboardNavbar: FC<IProps> = ({ isHighAccess }) => {
  const { darkTheme, dashboardType } = useSelector(
    (state: State) => state.common
  );

  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  const darkModeHandler = () => {
    setShowExitModal(true);
    if (darkTheme) {
      dispatch(darkThemeHandler(false));
    } else {
      dispatch(darkThemeHandler(true));
    }
  };
  const router = useRouter();


  const exitHandler = () => {
    console.log('ran')
    setShowExitModal(false)
    router.push("/");
    dispatch(dashboardTypeHandler(undefined));
    if (typeof window !== "undefined") {
      sessionStorage.clear();
      localStorage.clear();
    }
  };

  return (
    <div
      className={`px-2 w-full py-3 mb-3 border-b-1 border-gray-400 ${
        darkTheme ? "darkElem" : "bg-white"
      } z-50`}
    >
      <Grid container>
        <Grid item xs={4} sm={4} md={9} lg={9} className={`flex items-center`}>
          <div className="lg:ml-10">
            {!isHighAccess && (
              <Image src="/images/drmeet final1.png" width={170} />
            )}
          </div>

          <Input
            size={"sm"}
            type="email"
            placeholder="جستجو ..."
            startContent={
              <Button isIconOnly className="bg-transparent">
                <SearchIcon
                  className={darkTheme ? "text-white" : "text-gray-500"}
                />
              </Button>
            }
            classNames={{
              input:
                "hover:!bg-transparent bg-transparent border-none shadow-none drop-shadow-none outline-0",
              inputWrapper:
                "hover:!bg-transparent bg-transparent border-none shadow-none drop-shadow-none outline-0",
            }}
            className="hidden lg:block"
          />
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={3} className={`flex justify-end`}>
          <div className="flex items-center gap-2">
            <Button
              isIconOnly
              className="bg-transparent rounded-full"
              onClick={() => setShowSearch(!showSearch)}
            >
              <SearchIcon
                className={darkTheme ? "text-white" : "text-gray-500"}
              />
            </Button>

            <Button
              isIconOnly
              className={`bg-transparent rounded-full`}
              onClick={darkModeHandler}
            >
              <DarkModeIcon
                className={`${darkTheme ? "text-white" : "text-gray-500"}`}
              />
            </Button>
            <Button isIconOnly className={`bg-transparent rounded-full`}>
              <AppsIcon
                className={`${darkTheme ? "text-white" : "text-gray-500"}`}
              />
            </Button>
            <Button isIconOnly className={`bg-transparent rounded-full`}>
              <NotificationsIcon
                className={`${darkTheme ? "text-white" : "text-gray-500"}`}
              />
            </Button>
            {!showExitModal && (
              <Popover
                placement={"bottom-start"}
                backdrop={"blur"}
                color={darkTheme ? "foreground" : "default"}
                onClose={() => {
                  if (showExitModal) {
                    return false;
                  }
                }}
              >
                <PopoverTrigger className="hover:cursor-pointer">
                  <Avatar />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="pr-2 py-2 flex !flex-col justify-start items-start gap-4 w-52">
                    <div className="flex items-center gap-3 py-2">
                      <Avatar />
                      <div className="flex !flex-col justify-center">
                        <h6 className="">دکتر لورم ایپسوم</h6>
                        <h6 className="text-[0.8rem]">پزشک</h6>
                      </div>
                    </div>
                    <Divider />
                    <div className="">
                      <Link href="/dashboard/profile" className={`py-1 px-2 `}>
                        <AccountCircleIcon />
                        <span className="mr-2">پروفایل</span>
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="javascript:void(0);"
                        onClick={() => setShowExitModal(true)}
                        className={`text-red-500 py-1 px-2 `}
                      >
                        <LogoutIcon />
                        <span className="mr-2">خروج</span>
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </Grid>
        {showSearch && (
          <Grid xs={12}>
            <div className="px-1 py-2 !w-full">
              <Input
                size={"sm"}
                type="email"
                placeholder="جستجو ..."
                endContent={
                  <Button isIconOnly className="bg-transparent">
                    <SearchIcon />
                  </Button>
                }
                className="w-full"
              />
            </div>
          </Grid>
        )}
      </Grid>
      {showExitModal && (
        <Modal
          isOpen={showExitModal}
          placement="center"
          backdrop="blur"
          onOpenChange={setShowExitModal}
          classNames={{
            base: darkTheme ? "darkBG border border-white" : "text-gray-500",
            closeButton: "hidden",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <p
                    className={`py-3 ${
                      darkTheme ? "text-white" : "text-black"
                    }`}
                  >
                    آیا میخواهید خارج شوید؟
                  </p>
                </ModalBody>
                <ModalFooter className="flex justify-center items-center gpa-3">
                  <Button color="primary" variant="light" onPress={onClose}>
                    انصراف
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => exitHandler()}
                  >
                    خروج
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default DashboardNavbar;

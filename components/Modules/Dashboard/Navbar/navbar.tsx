import { Grid } from "@mui/material";
import {
  Avatar,
  Button,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeHandler } from "@/store/common";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { FC } from "react";

type State = {
  common: {
    darkTheme: boolean;
  };
};

interface IProps {
  isHighAccess: boolean;
}

const DashboardNavbar: FC<IProps> = ({ isHighAccess }) => {
  const { darkTheme } = useSelector((state: State) => state.common);
  const dispatch = useDispatch();

  const darkModeHandler = () => {
    if (darkTheme) {
      dispatch(darkThemeHandler(false));
    } else {
      dispatch(darkThemeHandler(true));
    }
  };

  return (
    <div className={`w-full py-3 mb-3`}>
      <Grid container>
        <Grid item xs={12} sm={12} md={9} lg={9} className={`flex items-center`}>
          <div className="ml-10">
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
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} className={`flex justify-end`}>
          <div className="flex items-center gap-2">
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
            <Popover
              placement={"bottom-start"}
              backdrop={"blur"}
              color={darkTheme ? "foreground" : "default"}
            >
              <PopoverTrigger className="hover:cursor-pointer">
                <Avatar />
              </PopoverTrigger>
              <PopoverContent>
                <div className="pr-2 pl-8 py-2 flex !flex-col items-start gap-3">
                  <div className="">
                    <Link href="/dashboard/profile" className={`py-1 px-2 `}>
                      <AccountCircleIcon />
                      <span className="mr-2">پروفایل</span>
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="javascript:void(0);"
                      className={`text-red-500 py-1 px-2 `}
                    >
                      <LogoutIcon />
                      <span className="mr-2">خروج</span>
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardNavbar;

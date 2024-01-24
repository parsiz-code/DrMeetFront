import { ToShamsiDate, toPersianDigits } from "@/helper/dateTimeHelper";
import { Grid } from "@mui/material";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Brightness1Icon from '@mui/icons-material/Brightness1';

interface IProps {
  avatarPhoto?: string;
  title?: string;
  doctor?: string;
  requestDate?: Date;
  answerStatus?: boolean;
  openingStatus?: boolean;
}

type State = {
  common: {
    darkTheme: boolean;
  };
};

const ConsultationItem: FC<IProps> = ({
  avatarPhoto,
  title,
  doctor,
  requestDate,
  answerStatus,
  openingStatus,
}) => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <Link href="" className="">
      <div
        className={`${
          darkTheme ? "darkElem" : "bg-white"
        } rounded-xl py-3 px-10 my-2`}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="flex items-center gap-10">
              <Avatar
                src={`data:image/png;base64, ${avatarPhoto}`}
                size="lg"
              />
              <div className="">
                <h6
                  className={`${
                    darkTheme ? "text-white" : "text-black"
                  }`}
                >
                  {toPersianDigits(
                    "مشکل در مهره 4 و 5 و ناتوانی در راه رفتن به صورت عادی"
                  )}
                </h6>
                <h6
                  className={`${
                    darkTheme ? "text-gray-400" : "text-gray-500"
                  } text-[0.8rem]`}
                >
                  {doctor}
                </h6>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="mt-4 lg:mt-0" alignItems={'center'}>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center md:gap-20 !flex-col md:!flex-row">
                <div className="flex items-center pt-2 gap-3">
                  <h6
                    className={`${
                      darkTheme ? "text-white" : "text-gray-500"
                    } text-[0.9rem]`}
                  >
                    تاریخ درخواست:
                  </h6>
                  <h6
                    className={`${
                      darkTheme ? "text-white" : "text-gray-500"
                    } text-[0.9rem]`}
                  >
                    {ToShamsiDate(requestDate! , 'date')}
                  </h6>
                </div>
                <div className="flex items-center pt-2 gap-2">
                  {!answerStatus ? (
                    <Button className="w-full py-2 rounded-xl text-center bg-green-600 text-white text-[0.8rem]">
                      در انتظار پاسخ
                    </Button>
                  ) : (
                    <Button className="w-full py-2 rounded-xl text-center bg-gray-400 text-white text-[0.8rem]">
                      پاسخ داده شده
                    </Button>
                  )}
                  <Button className="text-[0.8rem] bg-blue-500 text-white" isDisabled={!openingStatus && true}>
                    ثبت نظر
                  </Button>
                </div>
              </div>
              <div className="flex items-center pt-2">
                {!openingStatus ? (
                  <div
                    className={`bg-green-300 text-black p-1 rounded-xl flex justify-center items-center gap-1`}
                  >
                    <Brightness1Icon className="h-4 w-4 activeLighter"/>
                    <span className="text-[0.8rem] px-1">فعال</span>
                  </div>
                ) : (
                  <div
                    className={`${
                      darkTheme
                        ? "bg-gray-500 text-gray-700"
                        : "bg-gray-200 text-gray-400"
                    } p-1 rounded-xl`}
                  >
                    <span className="text-[0.8rem]">بسته شده</span>
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Link>
  );
};

export default ConsultationItem;

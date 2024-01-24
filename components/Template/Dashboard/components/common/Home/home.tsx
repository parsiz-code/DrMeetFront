import { toPersianDigits } from "@/helper/dateTimeHelper";
import { FC } from "react";
import { useSelector } from "react-redux";

type State = {
  common: {
    darkTheme: boolean;
  };
};

const DashboardHomePage = () => {
  const { darkTheme } = useSelector((state: State) => state.common);
  const testNotifs = [
    {
      text: "لورم ایپسوم متن ساختگی مورد استفاده در صنعت چاپ و روزنامه مورد استفاده و تایید دستگاه میباشد.",
    },
    {
      text: "لورم ایپسوم متن ساختگی مورد استفاده در صنعت چاپ و روزنامه مورد استفاده و تایید دستگاه میباشد.",
    },
    {
      text: "لورم ایپسوم متن ساختگی مورد استفاده در صنعت چاپ و روزنامه مورد استفاده و تایید دستگاه میباشد.",
    },
    {
      text: "لورم ایپسوم متن ساختگی مورد استفاده در صنعت چاپ و روزنامه مورد استفاده و تایید دستگاه میباشد.",
    },
  ];
  return (
    <div className="h-[100vh] lg:h-auto">
      <div className={`p-4 rounded-xl ${darkTheme ? 'darkElem' : 'bg-white'} shadow-xl`}>
        <h6 className={`font-bold text-[1.4rem] mb-5 ${darkTheme ? 'text-white' : 'text-black'}`}>تابلو اعلانات</h6>
        <div className="leading-10 px-10">
          {testNotifs.map((item, index) => (
            <h6 className={`${darkTheme ? 'text-white' : 'text-black'}`}>
              {toPersianDigits(index + 1)}- {item.text}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;

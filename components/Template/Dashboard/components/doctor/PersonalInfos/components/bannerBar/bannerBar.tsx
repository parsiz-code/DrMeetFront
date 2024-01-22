import { Avatar, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";

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
const BannerBar = () => {
  const { darkTheme, dashboardType } = useSelector(
    (state: State) => state.common
  );
  if (dashboardType === "doctor") {
    return (
      <div className="px-2 lg:px-0">
        <div className={`${darkTheme ? "darkElem" : "bg-white"}`}>
          <div className="">
            <Image src="/images/profile-banner.png" radius="none" />
          </div>
          <div className="px-4 lg:px-10 flex">
            <div
              className={`${
                darkTheme ? "border-[#232323]" : "bg-white"
              } border-5 rounded-lg -translate-y-10`}
            >
              <Image src="https://i.pravatar.cc/700" width={150} classNames={{
                img: 'rounded-md'
              }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default BannerBar;

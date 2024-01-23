import { Avatar, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";

type State = {
  common: {
    darkTheme: boolean;
  };
};
const BannerBar = () => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <div className="px-2 lg:px-0">
      <div className={`${darkTheme ? "darkElem" : "bg-white"}`}>
        <div className="z-10">
          <Image src="/images/profile-banner.png" radius="none" />
        </div>
        <div className="px-4 lg:px-10 flex z-20">
          <div
            className={`${
              darkTheme ? "border-[#fff]" : "bg-white"
            } border-5 rounded-lg -translate-y-10 z-20`}
          >
            <Image
              src="/images/noPhoto.png"
              classNames={{
                img: "rounded-md z-20 h-32 w-32",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerBar;

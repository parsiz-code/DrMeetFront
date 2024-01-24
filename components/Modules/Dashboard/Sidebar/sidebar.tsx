import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Image, Tooltip } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import SidebarItemData from "./sidebarItems";
import Link from "next/link";
import { useSelector } from "react-redux";
import { set } from "lodash";

type State = {
  common: {
    darkTheme: boolean;
  };
};

interface IProps {
  highOrderAccess: number;
}

const DashboardSidebar: FC<IProps> = ({ highOrderAccess }) => {
  const [wide, setWide] = useState<boolean>(true);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);
  const { darkTheme } = useSelector((state: State) => state.common);

  useEffect(() => {
    if (highOrderAccess === 1) {
      setIsSuperAdmin(false);
    } else if (highOrderAccess === 2) {
      setIsSuperAdmin(true);
    }
  }, [highOrderAccess]);

  return (
    <div
      className={`${wide ? "w-60" : "w-24"} ${
        darkTheme ? "darkElem" : "bg-white"
      } h-[100vh] p-2 transition-all`}
      //   onMouseOver={() => setWide(true)}
      //   onMouseOut={() => setWide(false)}
    >
      {wide ? (
        <div className="w-full flex justify-between items-center">
          <Image src="/images/drmeet final1.png" width={130} />
          <MenuOpenIcon
            className="text-red-500 hover:cursor-pointer rotate-180"
            onClick={() => setWide(!wide)}
          />
        </div>
      ) : (
        <div className="w-full flex justify-between items-center">
          <Image src="/images/logo3.png" width={55} />
          <MenuOpenIcon
            className="text-blue-500 hover:cursor-pointer"
            onClick={() => setWide(!wide)}
          />
        </div>
      )}
      <div className="w-ful flex !flex-col justify-center mt-10">
        {isSuperAdmin ? (
          <>
            {SidebarItemData.superadmin.map((item, index) => (
              <>
                {wide ? (
                  <Link
                    href={`${item.route}`}
                    className={`flex !items-center ${
                      wide ? "" : "justify-center"
                    } gap-2 py-3 px-2 hover:bg-[#f3f4f4] rounded-lg`}
                  >
                    {item.icon}
                    <h6
                      className={`${
                        darkTheme ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h6>
                  </Link>
                ) : (
                  <Tooltip content={item.title}>
                    <Link
                      href={`${item.route}`}
                      className={`flex !items-center ${
                        wide ? "" : "justify-center"
                      } gap-2 py-3 px-2 hover:bg-[#f3f4f4] rounded-lg`}
                    >
                      {item.icon}
                    </Link>
                  </Tooltip>
                )}
              </>
            ))}
          </>
        ) : (
          <>
            {SidebarItemData.doctorAdmin.map((item, index) => (
              <>
                {wide ? (
                  <Link
                    href={`${item.route}`}
                    className={`flex !items-center ${
                      wide ? "" : "justify-center"
                    } gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
                  >
                    {item.icon}
                    <h6
                      className={`${
                        darkTheme ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h6>
                  </Link>
                ) : (
                  <Tooltip content={item.title}>
                    <Link
                      href={`/${item.route}`}
                      className={`flex !items-center ${
                        wide ? "" : "justify-center"
                      } gap-2 py-3 px-2 hover:bg-[#f3f4f4] rounded-lg`}
                    >
                      {item.icon}
                    </Link>
                  </Tooltip>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default DashboardSidebar;

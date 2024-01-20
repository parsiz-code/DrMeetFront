import { FC, useEffect, useState } from "react";
import MenubarItems from "./menubarItems";
import Link from "next/link";
import { useSelector } from "react-redux";

type State = {
  common: {
    darkTheme: boolean;
  };
};

interface IProps {
  lowOrderAccess: number;
}
const DashboardMenubar: FC<IProps> = ({ lowOrderAccess }) => {
  const [isDoctor, setIsDoctor] = useState(false);
  const { darkTheme } = useSelector((state: State) => state.common);

  useEffect(() => {
    if (lowOrderAccess === 1) {
      setIsDoctor(false);
    } else if (lowOrderAccess === 2) {
      setIsDoctor(true);
    }
  }, [lowOrderAccess]);

  return (
    <div className="w-full py-3">
      <div className="flex items-center gap-3">
        {!isDoctor ? (
          <>
            {MenubarItems.patient.map((item, index) => (
              <Link
                href={`${item.route}`}
                className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
              >
                {item.icon}
                <h6
                  className={`${darkTheme ? "text-gray-200" : "text-gray-500"}`}
                >
                  {item.title}
                </h6>
              </Link>
            ))}
          </>
        ) : (
          <>
            {MenubarItems.doctor.map((item, index) => (
              <Link
                href={`${item.route}`}
                className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
              >
                {item.icon}
                <h6
                  className={`${darkTheme ? "text-gray-200" : "text-gray-500"}`}
                >
                  {item.title}
                </h6>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardMenubar;

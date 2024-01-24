import { FC } from "react";
import { useSelector } from "react-redux";
import { FcInfo } from "react-icons/fc";

type State = {
  common: {
    darkTheme: boolean;
  };
};

interface IProps {
  title: string;
}

const NoFoundData: FC<IProps> = ({ title }) => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <div className="">
      <div className={`bg-blue-100 rounded-xl py-3 px-10 my-2`}>
        <div className="flex !flex-col justify-center items-center gap-4">
          <FcInfo className="w-10 h-10" />
          <h6 className="">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default NoFoundData;

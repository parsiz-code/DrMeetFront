import { Spinner } from "@nextui-org/react";
import { FC } from "react";
import { useSelector } from "react-redux";

type State = {
  common: {
    darkTheme: boolean;
  };
};

const DataWaiter = () => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <div className="">
      <div
        className={`${
          darkTheme ? "darkElem" : "bg-white"
        } rounded-xl py-3 px-10 my-2`}
      >
        <div className="flex !flex-col justify-center items-center gap-4">
          <Spinner />
          <h6 className="">لطفا کمی صبر نمایید...</h6>
        </div>
      </div>
    </div>
  );
};

export default DataWaiter;

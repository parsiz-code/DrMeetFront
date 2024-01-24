import { FC } from "react";
import { useSelector } from "react-redux";

interface IProps {
  title: string;
}

type State = {
  common: {
    darkTheme: boolean;
  };
};

const RouteTitle: FC<IProps> = ({ title }) => {
  const { darkTheme } = useSelector((state: State) => state.common);
  return (
    <h6
      className={`text-center mb-5 text-[1.3rem] ${
        darkTheme ? "text-white" : "text-black"
      }`}
    >
      {title}
    </h6>
  );
};

export default RouteTitle;

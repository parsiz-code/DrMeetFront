import { useSelector } from "react-redux";
import ConsultationItem from "./consultationItem";

type State = {
  common: {
    darkTheme: boolean;
  };
};

const ConsultationList = () => {
  const { darkTheme } = useSelector((state: State) => state.common);

  return (
    <div>
      <h6 className={`text-center mb-5 text-[1.3rem] ${darkTheme ? "text-white" : "text-black"}`}>
        مشاوره های من
      </h6>
      <ConsultationItem />
      <ConsultationItem />
      <ConsultationItem />
      <ConsultationItem />
    </div>
  );
};

export default ConsultationList;

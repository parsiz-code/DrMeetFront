import { useSelector } from "react-redux";
import ConsultationItem from "./consultationItem";
import NoFoundData from "@/components/Modules/NotFoundData/NotFoundData";
import DataWaiter from "@/components/Modules/DataWaiter/DataWaiter";
import RouteTitle from "@/components/Modules/RouteName/RouteName";
import { usePatientConsultation } from "../context";

type State = {
  common: {
    darkTheme: boolean;
  };
};

const ConsultationList = () => {
  const { darkTheme } = useSelector((state: State) => state.common);

  const { loading, allCosultationData } = usePatientConsultation();

  return (
    <div className="">
      <RouteTitle title="مشاوره های من" />

      {allCosultationData?.map((item, index) => (
        <ConsultationItem
          doctor={item.doctorFullName}
          avatarPhoto={item.patientAvatar}
          requestDate={item.createDate}
          openingStatus={item.isClosed}
        />
      ))}

      {loading && <DataWaiter />}

      {allCosultationData?.length <= 0 && (
        <NoFoundData title="مشاوره ای جهت نمایش وجود ندارد." />
      )}

      {/* <ConsultationItem />
      <ConsultationItem />
      <ConsultationItem />
      <ConsultationItem /> */}
    </div>
  );
};

export default ConsultationList;

import Breadcrumb from "@/components/Modules/BreadCrumb";
import DashboardLayout from "..";
import RecordRefer from "@/components/Template/Dashboard/components/patient/recordRefer/recordRefer";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { useSelector } from "react-redux";

type State = {
  common: {
    dashboardType: Dashboard_Type | undefined;
  };
};
const MyRecordsReferPage = () => {
  const { dashboardType } = useSelector((state: State) => state.common);

  if (dashboardType === Dashboard_Type.patient) {
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="سوابق مراجعه من"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        <RecordRefer />
      </DashboardLayout>
    );
  }
};
export default MyRecordsReferPage;

import DashboardLayout from "..";
import Breadcrumb from "@/components/Modules/BreadCrumb";
import Consultation from "@/components/Template/Dashboard/components/patient/consultation/consultation";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { useSelector } from "react-redux";

type State = {
  common: {
    dashboardType: Dashboard_Type | undefined;
  };
};

const MyConsultationPage = () => {
  const { dashboardType } = useSelector((state: State) => state.common);

  if (dashboardType === Dashboard_Type.patient) {
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="مشاوره های من"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        <Consultation />
      </DashboardLayout>
    );
  }
};
export default MyConsultationPage;

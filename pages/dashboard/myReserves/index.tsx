import Breadcrumb from "@/components/Modules/BreadCrumb";
import DashboardLayout from "..";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { useSelector } from "react-redux";
import MeyReserves from "@/components/Template/Dashboard/components/patient/reservation/reservation";

type State = {
  common: {
    darkTheme: boolean;
    dashboardType: Dashboard_Type | undefined;
  };
};
const MyReservesPage = () => {
  const { dashboardType } = useSelector((state: State) => state.common);
  if (dashboardType === Dashboard_Type.patient) {
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="نوبت های من"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        <MeyReserves/>
      </DashboardLayout>
    );
  }
};

export default MyReservesPage;

import Breadcrumb from "@/components/Modules/BreadCrumb";
import DashboardLayout from "..";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { useSelector } from "react-redux";
import MyPayments from "@/components/Template/Dashboard/components/patient/myPayments/myPayments";

type State = {
  common: {
    dashboardType: Dashboard_Type | undefined;
  };
};
const MyPaymentsPage = () => {
  const { dashboardType } = useSelector((state: State) => state.common);

  if (dashboardType === Dashboard_Type.patient) {
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="پرداخت های من"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        <MyPayments/>
      </DashboardLayout>
    );
  }
};

export default MyPaymentsPage;

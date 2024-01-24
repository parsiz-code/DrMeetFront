import PersonalInfos from "@/components/Template/Dashboard/components/doctor/PersonalInfos/personalInfos";
import React from "react";
import DashboardLayout from "..";
import Breadcrumb from "@/components/Modules/BreadCrumb";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { useSelector } from "react-redux";
import DoctorPersonalInfos from "@/components/Template/Dashboard/components/doctor/PersonalInfos/personalInfos";

type State = {
  common: {
    darkTheme: boolean;
    dashboardType: Dashboard_Type | undefined;
  };
};

function PersonalInformationPage() {
  const { dashboardType } = useSelector((state: State) => state.common);

  if (dashboardType === Dashboard_Type.doctor) {
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="اطلاعات فردی"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        <DoctorPersonalInfos />
      </DashboardLayout>
    );
  }else if(dashboardType === Dashboard_Type.patient){
    return (
      <DashboardLayout>
        <Breadcrumb
          currentRoute="اطلاعات فردی"
          prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
        />
        
      </DashboardLayout>
    );
  }
}

export default PersonalInformationPage;

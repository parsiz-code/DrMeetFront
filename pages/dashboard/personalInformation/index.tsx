import PersonalInfos from "@/components/Template/Dashboard/components/doctor/PersonalInfos/personalInfos";
import React from "react";
import DashboardLayout from "..";
import Breadcrumb from "@/components/Modules/BreadCrumb";

function PersonalInformationPage() {
  return (
    <DashboardLayout>
      <Breadcrumb
        currentRoute="اطلاعات فردی"
        prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
      />
      <PersonalInfos />
    </DashboardLayout>
  );
}

export default PersonalInformationPage;

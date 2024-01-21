import ConsultationList from "@/components/Template/Dashboard/components/patient/consultation/consultation";
import DashboardLayout from "..";
import Breadcrumb from "@/components/Modules/BreadCrumb";

const MyConsultationPage = () => {
  return (
    <DashboardLayout>
      <Breadcrumb
        currentRoute="مشاوره های من"
        prevRoutes={[{ title: "خانه", path: "/dashboard" }]}
      />
      <ConsultationList />
    </DashboardLayout>
  );
};
export default MyConsultationPage;

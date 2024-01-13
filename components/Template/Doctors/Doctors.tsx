import React from "react";
import DoctorsCtxProvider from "./context";
import Breadcrumb from "@/components/Modules/BreadCrumb";
import DoctorsListBar from "./components/doctorsListBar";
import DoctorList from "./components/doctorsList";

function Doctors() {
  return (
    <DoctorsCtxProvider>
      <div className="px-2 lg:px-10">
        <DoctorsListBar/>
        <DoctorList/>
      </div>
    </DoctorsCtxProvider>
  );
}

export default Doctors;

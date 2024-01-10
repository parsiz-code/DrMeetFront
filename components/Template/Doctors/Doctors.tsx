import React from "react";
import DoctorsCtxProvider from "./context";
import Breadcrumb from "@/components/Modules/BreadCrumb";

function Doctors() {
  return (
    <DoctorsCtxProvider>
      <div className="px-10">
        <Breadcrumb
          prevRoutes={[{ title: "دکترمیت", path: "/" }]}
          currentRoute="دکتر ها"
        />
      </div>
    </DoctorsCtxProvider>
  );
}

export default Doctors;

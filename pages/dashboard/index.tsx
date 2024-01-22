import DashboardMenubar from "@/components/Modules/Dashboard/Menubar/menubar";
import DashboardNavbar from "@/components/Modules/Dashboard/Navbar/navbar";
import DashboardSidebar from "@/components/Modules/Dashboard/Sidebar/sidebar";
import DashboardHomePage from "@/components/Template/Dashboard/components/common/Home/home";
import { dashboardTypeHandler } from "@/store/common";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type DashboardLayoutProps = {
  children: ReactNode;
};

type State = {
  common: {
    darkTheme: boolean;
    dashboardType:
      | "patient"
      | "doctor"
      | "doctorAdmin"
      | "superAdmin"
      | undefined;
  };
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { darkTheme, dashboardType } = useSelector(
    (state: State) => state.common
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // dispatch(dashboardTypeHandler('patient'))
    dispatch(dashboardTypeHandler("doctor"));
    // dispatch(dashboardTypeHandler('doctorAdmin'))
    // dispatch(dashboardTypeHandler('superAdmin'))
    // dispatch(dashboardTypeHandler(undefined));
  }, [dispatch]);

  // useEffect(() => {
  //   if (dashboardType === undefined) {
  //     router.push("/login");
  //   }
  // }, []);

  if (dashboardType !== undefined) {
    return (
      <div
        className={`flex ${
          darkTheme ? "darkBG" : "bg-[#f3f4f4]"
        } h-auto md:h-[100vh]`}
      >
        {(dashboardType === "doctorAdmin" ||
          dashboardType === "superAdmin") && (
          <div>
            <DashboardSidebar
              highOrderAccess={dashboardType === "doctorAdmin" ? 1 : 2}
            />
          </div>
        )}
        <div
          className={`${
            dashboardType === "doctorAdmin" || dashboardType === "superAdmin"
              ? "px-2 lg:px-10"
              : "px-2 lg:px-80"
          } w-full`}
        >
          <>
            <div className="sticky top-0 z-50 left-0 right-0 -px-2 -mx-2">
              <DashboardNavbar
                isHighAccess={
                  dashboardType === "doctorAdmin" ||
                  dashboardType === "superAdmin"
                }
              />
              {dashboardType !== "doctorAdmin" &&
                dashboardType !== "superAdmin" && (
                  <DashboardMenubar
                    lowOrderAccess={dashboardType === "doctor" ? 2 : 1}
                  />
                )}
            </div>
            <div className="mb-24 lg:mb-0">
              {children ? <>{children}</> : <DashboardHomePage />}
            </div>
          </>
        </div>
      </div>
    );
  }
};

export default DashboardLayout;

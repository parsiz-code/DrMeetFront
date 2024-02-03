import DashboardMenubar from "@/components/Modules/Dashboard/Menubar/menubar";
import DashboardNavbar from "@/components/Modules/Dashboard/Navbar/navbar";
import DashboardSidebar from "@/components/Modules/Dashboard/Sidebar/sidebar";
import DashboardHomePage from "@/components/Template/Dashboard/components/common/Home/home";
import { dashboardTypeHandler } from "@/store/common";
import useGetUserInfo from "@/utils/hooks/useGetUserInfo";
import { Dashboard_Type } from "@/utils/models/enum/dashboardType";
import { localStoragesName } from "@/utils/models/enum/localStoragesName";
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
    dashboardType: Dashboard_Type | undefined;
  };
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  useGetUserInfo();
  const { darkTheme, dashboardType } = useSelector(
    (state: State) => state.common
  );
  const dispatch = useDispatch();
  const router = useRouter();

  let token: string | null = "";
  let userType: string | null = "";

  // Check if the code is running in the browser
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
    userType = sessionStorage.getItem("userType");
   
  }

  useEffect(() => {
    if (userType) {
      dispatch(dashboardTypeHandler(JSON.parse(userType!)));
    }
    // dispatch(dashboardTypeHandler(Dashboard_Type.patient));
    // dispatch(dashboardTypeHandler(Dashboard_Type.doctor));
    // dispatch(dashboardTypeHandler(Dashboard_Type.admin))
    // dispatch(dashboardTypeHandler(Dashboard_Type.superAdmin))
    // dispatch(dashboardTypeHandler(undefined));
  }, []);

  // useEffect(() => {
  //   if (dashboardType === undefined) {
  //     router.push("/login");
  //   }
  // }, []);

  useEffect(() => {
    if (token === null) {
      dispatch(dashboardTypeHandler(undefined));
      router.push("/login");
    }
  }, []);

  if (dashboardType !== undefined) {
    return (
      <div
        className={`flex ${
          darkTheme ? "darkBG" : "bg-[#f3f4f4]"
        } h-auto md:h-[100vh]`}
      >
        {(dashboardType === Dashboard_Type.admin ||
          dashboardType === Dashboard_Type.superAdmin) && (
          <div>
            <DashboardSidebar
              highOrderAccess={dashboardType === Dashboard_Type.admin ? 1 : 2}
            />
          </div>
        )}
        <div
          className={`${
            dashboardType === Dashboard_Type.admin ||
            dashboardType === Dashboard_Type.superAdmin
              ? "px-2 lg:px-10"
              : "px-2 lg:px-52"
          } w-full`}
        >
          <>
            <div className="sticky top-0 z-50 left-0 right-0 -px-2 -mx-2">
              <DashboardNavbar
                isHighAccess={
                  dashboardType === Dashboard_Type.admin ||
                  dashboardType === Dashboard_Type.superAdmin
                }
              />
              {dashboardType !== Dashboard_Type.admin &&
                dashboardType !== Dashboard_Type.superAdmin && (
                  <DashboardMenubar
                    lowOrderAccess={
                      dashboardType === Dashboard_Type.doctor ? 2 : 1
                    } // 2 -> doctor   1 -> patient
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

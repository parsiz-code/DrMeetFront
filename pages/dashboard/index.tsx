import DashboardMenubar from "@/components/Modules/Dashboard/Menubar/menubar";
import DashboardNavbar from "@/components/Modules/Dashboard/Navbar/navbar";
import DashboardSidebar from "@/components/Modules/Dashboard/Sidebar/sidebar";
import DashboardHomePage from "@/components/Template/Dashboard/components/Home/home";
import { FC, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type DashboardLayoutProps = {
  children: ReactNode;
};

type State = {
  common: {
    darkTheme: boolean;
  };
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { darkTheme } = useSelector((state: State) => state.common);
  const [isHighOrderAccess, setIsHighOrderAccess] = useState<boolean>(false);
//   const [isLowOrderAccess, setIsLowOrderAccess] = useState<boolean>(false);
  return (
    <div className={`flex ${darkTheme ? "darkBG" : "bg-[#f3f4f4]"} h-[100vh]`}>
      {isHighOrderAccess && (
        <div className="">
          <DashboardSidebar highOrderAccess={1}/>
        </div>
      )}
      <div className={`${!isHighOrderAccess ? 'px-2 lg:px-80' : 'px-2 lg:px-10'} w-full` }>
        <>
          <DashboardNavbar isHighAccess={isHighOrderAccess}/>
          {
            !isHighOrderAccess && (
                <DashboardMenubar lowOrderAccess={2}/>
            )
          }
          {children ? <>{children}</> : <DashboardHomePage />}
        </>
      </div>
    </div>
  );
};

export default DashboardLayout;

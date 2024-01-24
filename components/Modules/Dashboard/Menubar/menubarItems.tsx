import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MenubarItems = {
  patient: [
    {
      title: "خانه",
      route: "/dashboard",
      icon: <HomeIcon className={`text-gray-400`} />,
    },
    {
      title: "مشاوره های من",
      route: "/dashboard/myConsultation",
      icon: <SupervisorAccountIcon className={`text-gray-400`} />,
    },
    {
      title: "اخذ نوبت",
      route: "/dashboard/newReserve",
      icon: <AddCircleIcon className={`text-gray-400`} />,
    },
    {
      title: "نوبت های من",
      route: "/dashboard/myReserves",
      icon: <CalendarMonthIcon className={`text-gray-400`} />,
    },
    {
      title: "سوابق مراجعه من",
      route: "/dashboard/myRecordsRefer",
      icon: <HistoryIcon className={`text-gray-400`} />,
    },
    {
      title: "پرداخت های من",
      route: "/dashboard/myPayments",
      icon: <PaymentsIcon className={`text-gray-400`} />,
    },
  ],
  doctor: [
    {
      title: "خانه",
      route: "/dashboard",
      icon: <HomeIcon className={`text-gray-400`} />,
    },
    {
      title: "مشاوره های دریافتی",
      route: "/dashboard/receivedConsultation",
      icon: <SupervisorAccountIcon className={`text-gray-400`} />,
    },
    {
      title: "جستجوی نوبت",
      route: "/dashboard/searchReserve",
      icon: <CalendarMonthIcon className={`text-gray-400`} />,
    },
    {
      title: "گزارش حسابداری",
      route: "/dashboard/accountingReport",
      icon: <KeyIcon className={`text-gray-400`} />,
    },
  ],
};

export default MenubarItems
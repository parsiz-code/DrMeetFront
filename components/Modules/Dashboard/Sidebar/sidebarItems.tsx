import HomeIcon from "@mui/icons-material/Home";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DescriptionIcon from "@mui/icons-material/Description";
import BadgeIcon from "@mui/icons-material/Badge";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BusinessIcon from "@mui/icons-material/Business";


const SidebarItemData = {
  doctorAdmin: [
    {
      title: "خانه",
      route: "/dashboard",
      icon: (
        <HomeIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "اسلایدر",
      route: "/dashboard/slider",
      icon: (
        <ViewCarouselIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "درباره من",
      route: "/dashboard/aboutMe",
      icon: (
        <InfoIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "خدمات من",
      route: "/dashboard/myServices",
      icon: (
        <MedicalServicesIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "مقالات من",
      route: "/dashboard/myArticles",
      icon: (
        <DescriptionIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "بیوگرافی",
      route: "/dashboard/biography",
      icon: (
        <BadgeIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "نظرات بیماران",
      route: "/dashboard/comments",
      icon: (
        <InsertCommentIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "سوالات متداول",
      route: "/dashboard/questions",
      icon: (
        <HelpCenterIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "تصاویر / نمونه کار",
      route: "/dashboard/portfolio",
      icon: (
        <PhotoLibraryIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "آدرس و مشخصات",
      route: "/dashboard/moreInfo",
      icon: (
        <ContactPhoneIcon
          className={`text-gray-400`}
        />
      ),
    },
  ],
  superadmin: [
    {
      title: "لیست مشاوره",
      route: "/dashboard/consultationLists",
      icon: (
        <SupervisorAccountIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "لیست درخواست نوبت",
      route: "/dashboard/reservationsList",
      icon: (
        <CalendarMonthIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "لیست مطب",
      route: "/dashboard/clinicsList",
      icon: (
        <LocalHospitalIcon
          className={`text-gray-400`}
        />
      ),
    },
    {
      title: "لیست مراکز درمانی",
      route: "/dashboard/medicalCentersList",
      icon: (
        <BusinessIcon
          className={`text-gray-400`}
        />
      ),
    },
  ],
};

export default SidebarItemData;

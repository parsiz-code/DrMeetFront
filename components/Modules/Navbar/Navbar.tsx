import React, { FC, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";
import { Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from 'next/navigation'

interface IProps {
  routeName?: string;
}
const NavBar: FC<IProps> = ({ routeName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const pathName = usePathname()

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Box className="">
      <Box className="py-2 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 text-[0.8rem] bg-[#00DAF5] rounded-b-lg flex justify-between items-center">
        <span className="flex items-center text-white gap-4">
          <span>
            <AccessTimeIcon className="text-[0.9rem] ml-1" />
            ساعت کاری: همه روزه شنبه تا پنجشنبه ساعت ۸ تا ۲۰
          </span>
          <span className="flex items-center">
            <PhoneEnabledOutlinedIcon className="text-[0.9rem] ml-1" />
            <Link href="tel:+98" className="text-[0.9rem] text-white">
              ۰۱۱-۳۳۲۲۴۴۵۵
            </Link>
            <span className="mx-1">-</span>
            <Link href="tel:+98" className="text-[0.9rem] text-white">
              ۰۱۱-۳۳۶۶۷۷۸۸
            </Link>
          </span>
        </span>

        <span className="hidden md:flex items-center gap-4">
          <Link href="#" className="!text-white hover:!text-amber-500">
            <VaccinesOutlinedIcon className="!text-[0.9rem] ml-1" />
            <span className="text-[0.8rem]"> دریافت نوبت</span>
          </Link>
          <Link href="#" className="!text-white hover:!text-amber-500">
            <VpnKeyOutlinedIcon className="!text-[0.9rem] ml-1" />
            <span className="text-[0.8rem]">ورود به سایت</span>
          </Link>
        </span>
      </Box>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="!bg-transparent pt-0 mt-0">
        <Box className="flex items-center justify-between w-full bg-[#00DAF5] -translate-y-1 py-2 px-4 rounded-b-lg">
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <Image
                src="/images/drmeet1.png"
                alt="دکتر میت"
                width={50}
                height={50}
              />
              {/* <p className="font-bold text-inherit">DrMeet</p> */}
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive={pathName === routeName ? true : false}>
              <Link href="/" className="text-white hover:text-amber-400">
                صفحه اصلی
              </Link>
            </NavbarItem>
            <NavbarItem isActive={pathName === routeName ? true : false}>
              <Link href="/doctors" className="text-white hover:text-amber-400">
                پزشکان
              </Link>
            </NavbarItem>
            <NavbarItem isActive={pathName === routeName ? true : false}>
              <Link href="/healthMagazine" className="text-white hover:text-amber-400">
                مجله سلامت
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#" className="text-white">
                <SearchIcon className="font-bold"/>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Box>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </Box>
  );
};

export default NavBar;

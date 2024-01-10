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
  Image,
} from "@nextui-org/react";
import style from "@/styles/navbar.module.css";
import { Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";

interface IProps {
  routeName: string;
}
const NavBar: FC<IProps> = ({ routeName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const pathName = usePathname();

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
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-[#0095de]"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="bg-transparent">
            <Image
              className="rounded-none bg-transparent"
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
            <Link
              href="/healthMagazine"
              className="text-white hover:text-amber-400"
            >
              مجله سلامت
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === routeName ? true : false}>
            <Link href="/aboutUs" className="text-white hover:text-amber-400">
              درباره ما
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName === routeName ? true : false}>
            <Link href="/callUs" className="text-white hover:text-amber-400">
              تماس با ما
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-white">
              <SearchIcon className="font-bold" />
            </Link>
          </NavbarItem>
        </NavbarContent>
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

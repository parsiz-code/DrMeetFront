import React from "react";
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
import Image from "next/image";
import { Box } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <Box>
      <Box>
        <span>
          <span>
            <AccessTimeIcon/>
            
          </span>
          <span></span>
        </span>

        <span>
          <span></span>
          <span></span>
        </span>
      </Box>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <Image
              src="/public/images/drmeet1.png"
              alt="دکتر میت"
              width={200}
              height={200}
            /> */}
            <p className="font-bold text-inherit">DrMeet</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#" className="text-black hover:text-amber-400">
              صفحه اصلی
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" className="text-black hover:text-amber-400">
              پزشکان
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-black hover:text-amber-400">
              مجلسه سلامت
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
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
}

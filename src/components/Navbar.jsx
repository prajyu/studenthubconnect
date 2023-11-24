"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import "./main.css";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    "Profile",
    "Black Market",
    "Hostel Finder",
    "Student Sync",
    "Log Out",
  ];

  return (
    <Navbar className="Navbarbg" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-left">
            <Link
              href="/"
            >
              StudentHub Connect
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link
            className="text-cyan-900  "
            color="foreground"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
            href="/shop"
          >
            Black Market
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-cyan-900"
            href="/map"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
          >
            Hostel finder
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-cyan-900"
            color="foreground"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
            href="/forum"
          >
            Student Sync
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-cyan-900" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-cyan-900 hover:bg-cyan-500 "
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
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
  );
};

export default NavbarComp;

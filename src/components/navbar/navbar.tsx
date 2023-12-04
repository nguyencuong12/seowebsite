"use client";
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { SearchComponent } from "../components";
import { useMediaQuery } from "react-responsive";
import { MdContactPhone, MdFilter, MdAccountCircle } from "react-icons/md";
import { IconType } from "react-icons";

interface MenuInterface {
  icon: IconType;
  title: string;
  href: string;
}
const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [menus] = useState<MenuInterface[]>([
    {
      icon: MdContactPhone,
      title: "Liên Hệ",
      href: "lien-he",
    },
    {
      icon: MdFilter,
      title: "Tra cứu đơn hàng",
      href: "/tra-cuu-don-hang",
    },
    {
      icon: MdAccountCircle,
      title: "Đăng Nhập",
      href: "/login",
    },
  ]);

  useEffect(() => {
    if (isMobile) {
      setOpenMenu(false);
    }
  }, [isMobile]);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const renderMenuMobile = () => {
    return (
      <div className="flex flex-col mt-2">
        {menus.map((menu) => {
          return (
            <Link key={menu.title} href={menu.href} className="p-2 hover:bg-rose-600">
              <div className="flex flex-row justify-items-center">
                <menu.icon className="mr-2 text-2xl text-white"></menu.icon>
                <div className="text-white text-sm">{menu.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  const renderMenu = () => {
    return (
      <div className="flex ">
        {menus.map((menu) => {
          return (
            <Link key={menu.title} href={menu.href} className="p-2 hover:bg-rose-600">
              <div className="flex flex-row justify-items-center ">
                <menu.icon className="mr-2 text-2xl text-white"></menu.icon>
                <div className="text-white text-sm">{menu.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  const renderMobileNavbar = () => {
    return (
      <div className="relative w-full h-auto mt-2">
        <SearchComponent></SearchComponent>
        {renderMenuMobile()}
      </div>
    );
  };
  return (
    <nav className="bg-cyan-500 p-4 fixed w-full top-0 min-h-[100px] ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/gearvn.svg" width={120} height={50} alt="Logo" priority={true}></Image>
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 px-10 sm:block hidden max-w-xl">
          <SearchComponent></SearchComponent>
        </div>

        <div className="hidden md:flex space-x-4">{renderMenu()}</div>

        {/* Responsive Toggle Button */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={() => {
              onToggleMenu();
            }}
          >
            {openMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {openMenu && isMobile ? renderMobileNavbar() : <></>}
    </nav>
  );
};

export default NavbarComponent;

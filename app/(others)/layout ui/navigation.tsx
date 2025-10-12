"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo/Logo only.svg";
import style from "@/app/(home)/layout ui/layout.module.css";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const navListItems = [
    { id: 1, title: "Certificates" },
    { id: 2, title: "Resources" },
    { id: 3, title: "Blogs" },
    { id: 4, title: "Team" },
  ];

  const [isActive, setIsACtive] = useState(false);

  const openNav = function () {
    console.log("nav is open");
    setIsACtive(true);
  };

  const closeNav = function () {
    console.log("nav is close");
    setIsACtive(false);
  };

  return (
    <nav
      className={
        style.navigation +
        " relative z-50 min-h-8 lg:px-16 px-8 justify-between flex py-3 text-lg text-black items-center drop-shadow-md relative"
      }
    >
      <div className="flex justify-between lg:w-2/3 md:w-full items-center font-medium">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={70} />
          </Link>
        </div>
        <div className={`hidden md:flex justify-around w-full`}>
          <div className="hover:border-b-white transition-all border-b-2 border-b-transparent">
            <Link href="/" className={`${pathname === `/` ? "active" : ""}`}>
              Home
            </Link>
          </div>
          {navListItems.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:border-b-white transition-all border-b-2 border-b-transparent"
              >
                <Link
                  href={`/${item.title.toLowerCase()}`}
                  className={`${
                    pathname === `/${item.title.toLowerCase}` ? "active" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden bg-cy-500 text-white font-bold px-3 py-1 rounded-full min-w-32 md:flex justify-center items-center hover:scale-105	 transition-all cursor-pointer	">
        <a href="https://www.reddit.com/r/alevel/" target="_blank">
          Join Now
        </a>
      </div>

      <div
        onClick={openNav}
        className="md:hidden mobile-btn cursor-pointer hover:bg-cy-100/[0.2] transition-all rounded-md p-1 "
      >
        <img
          src="/home_img/hamburger.png"
          alt="hamburger"
          className={"w-9 " + `${isActive ? "hidden" : ""}`}
        />
      </div>

      <div
        className={
          "w-full h-screen  z-10 text-white absolute top-0 left-0  bg-black/70 " +
          `${isActive ? "" : "hidden"}`
        }
      >
        <div className="flex flex-col items-center justify-center text-4xl gap-10 font-semibold h-full">
          <a href="/">Home</a>
          <a href="/certificates">Certificates</a>
          <a href="/resources">Resources</a>
          <a href="/blogs">Blogs</a>
          <a href="/team">Team</a>
        </div>
        <div
          onClick={closeNav}
          className="absolute top-2 right-8 md:hidden mobile-btn cursor-pointer text-5xl text-white hover:bg-cy-100/[0.2] transition-all rounded-md p-1"
        >
          <h1>&times;</h1>
        </div>
      </div>
    </nav>
  );
}

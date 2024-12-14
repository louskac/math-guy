"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

type LeaderboardItem = {
  id: number;
  created_at: string;
  name: string;
  address: string;
  clicks: number;
};

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardItem[]>([]);

  const pathUrl = usePathname();

  // Fetch data from Supabase
  const fetchLeaderboardData = async () => {
    try {
      const { data, error } = await supabase.from("pepe").select("*").order("clicks", { ascending: false });

      if (error) throw error;
      setLeaderboardData(data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error.message);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      {/* Scrolling Text */}
      <div className="absolute top-2 left-0 w-full overflow-hidden">
        <div className="marquee text-yellow-400 text-lg md:text-xl font-bold uppercase tracking-wider">
          {leaderboardData.map(
            (item, index) =>
              `#${index + 1} ${item.name} - ${item.clicks.toLocaleString()} ${
                index === 0 ? "🚀🔥" : index === 1 ? "🐸✌️" : "✌️"
              } `
          )}
        </div>
      </div>

      {/* Rest of the Header */}
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4 pr-8">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={80}
              height={20}
              className="hidden w-full pr-20 sm:pr-0 dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              width={80}
              height={20}
              className="w-full pr-20 sm:pr-0 dark:hidden"
            />
          </a>

          {/* Hamburger Toggle */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full pl-20 ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-black xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                      </button>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            <Link
              href="https://pump.fun/coin/E7FvTn2cebMVh8mai1qiA93Y5xwMvhHZ8nUxtsYVpump"
              className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              I want to buy 🔥
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

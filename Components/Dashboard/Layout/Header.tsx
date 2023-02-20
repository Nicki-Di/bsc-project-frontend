"use client";
import React, { useEffect, useState } from "react";
import Package from "@/Components/UI/Package";
import UserProfile from "@/Components/Dashboard/UserProfile";
import SidebarDrawer from "@/Components/Dashboard/Layout/SidebarDrawer";
import { usePathname } from "next/navigation";
import { nestedSearch } from "@/utils/functions";
import { dashboardNavigation } from "@/utils/consts";
import Link from "next/link";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");
  useEffect(() => {
    const routeInfo = nestedSearch(dashboardNavigation, null, "href", pathname);
    setPageTitle(routeInfo.name);
  }, [pathname]);
  return (
    <header className={"w-full py-1 pl-4 flex flex-row items-center justify-between b1"}>
      <h4 className={"h4 hidden lg:block"}>{pageTitle}</h4>
      <SidebarDrawer />
      <div className={"flex flex-row items-end gap-8"}>
        <Link href={"/dashboard/packages"}>
          {/*TODO: Make package level real!*/}
          <Package level={"gold"} />
        </Link>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;

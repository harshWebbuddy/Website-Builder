"use client";

import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList, 
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { navArray } from "../data";

export function Menu() {
    const [activeTab, setActiveTab] = React.useState("Home");

  React.useEffect(() => {
    if (activeTab === "Services") {
      setActiveSublink("Mobile App Development");
    }
  }, [activeTab]);

  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row text-white font-light text-ellipsis">
        <div className="flex flex-col justify-start mr-4 gap-y-1 ">
          <h1 className={`pr-2 ${pathname === "/" && ""}`}>
            <Link href={navArray[0].link || "#"}>{navArray[0].category_title}</Link>
          </h1>
          <div className={`bg-[#FB524A] opacity-0 transition duration-200 w-0 h-1 rounded-full ${pathname === "/" && "w-full"}`} />
        </div>
        <div className="flex flex-col justify-start mr-4 gap-y-1">
          <h1 className={` ${pathname === "/" && ""}`}>
            <Link href={navArray[1].link || "#"}>{navArray[1].category_title}</Link>
          </h1>
          <div className={`bg-[#FB524A] opacity-0 transition duration-200 w-0 h-1 rounded-full ${pathname === "/" && "w-full"}`} />
        </div>
     
      </NavigationMenuList>
    </NavigationMenu>
  );
}

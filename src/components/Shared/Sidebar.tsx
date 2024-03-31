"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { linkData } from "@/static-data";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex-shrink-0  hidden lg:flex border-e dark:border-e-border w-[280px] min-h-screen flex-col gap-2">
      <h2 className="text-2xl py-4 ps-8 border-b dark:border-b-border">
        Carbon Cell
      </h2>
      <nav>
        <ul className="flex flex-col gap-2">
          {linkData.group.links.map((l, i) => {
            const active = l.path === pathname;
            return (
              <li key={l.path}>
                <Link
                  href={l.path}
                  className={`flex items-center gap-4 ps-8 py-2 font-medium transition-all ease-in-out duration-300 hover: ${
                    active && " text-red-500"
                  }`}
                >
                  <l.icon size={18} />
                  {l.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

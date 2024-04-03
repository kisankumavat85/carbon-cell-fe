"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

import { linkData } from "@/static-data";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex lg:hidden border-b dark:border-b-border w-full h-20 gap-2 justify-between items-center px-6">
      <Link href="/" onClick={() => setIsMenuOpen(false)}>
        <h2 className="text-2xl font-bold font-mono">
          Carbon <span className="text-red-500">Cell</span>
        </h2>
      </Link>
      <Button onClick={() => setIsMenuOpen(true)} size="icon" variant="outline">
        <MenuIcon />
      </Button>
      {isMenuOpen && (
        <div className="bg-background h-full fixed top-0 left-0 flex flex-col w-full gap-6">
          <div className="flex border-b dark:border-b-border justify-between items-center px-6 h-20">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <h2 className="text-2xl font-bold font-mono">
                Carbon <span className="text-red-500">Cell</span>
              </h2>
            </Link>
            <Button
              onClick={() => setIsMenuOpen(false)}
              size="icon"
              variant="outline"
            >
              <X />
            </Button>
          </div>
          <nav>
            <ul className="flex flex-col gap-2">
              {linkData.group.links.map((l, i) => {
                const active = l.path === pathname;
                return (
                  <li key={l.path} onClick={() => setIsMenuOpen(false)}>
                    <Link
                      href={l.path}
                      className={`text-lg flex items-center mx-1 border border-none gap-4 ps-8 py-2 rounded-md hover:bg-red-50 font-medium transition-all ease-in-out duration-300 hover: ${
                        active &&
                        " text-red-500 bg-red-50 border shadow-sm border-red-500"
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
        </div>
      )}
    </header>
  );
};

export default MobileMenu;

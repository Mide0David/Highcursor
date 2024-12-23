"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo1.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            HighCursor
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-1 max-lg:px-4 justify-ceenter lg-justify-start hover:text-blue-400 text-12",
                { "bg-nav-focus border-r-4 border-blue-1": isActive }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;

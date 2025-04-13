"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-amber-50 shadow-sm">
      <div className="max-w-7xl mx-auto pl-1 pr-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <Image
                  src="/assets/cookiekit-logo.png"
                  alt="CookieKit Logo"
                  width={52}
                  height={52}
                  className="mr-1"
                />
                <span className="text-xl font-bold text-amber-800">
                  CookieKit
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-2 sm:flex sm:space-x-4 pl-8">
              <NavLink href="/" isActive={pathname === "/"}>
                Cookie Badge
              </NavLink>
              <NavLink href="/privacy" isActive={pathname === "/privacy"}>
                Privacy Policy
              </NavLink>
              <NavLink href="/tos" isActive={pathname === "/tos"}>
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-amber-200 text-amber-900 font-semibold"
          : "text-amber-700 hover:bg-amber-100 hover:text-amber-900"
      }`}
    >
      {children}
    </Link>
  );
}

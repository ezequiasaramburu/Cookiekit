"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
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
                <span className="text-xl font-bold text-gray-800">
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
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive
          ? "border-blue-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}

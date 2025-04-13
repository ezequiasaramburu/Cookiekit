"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TabNavigation() {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto mb-6 border border-amber-50 rounded-lg">
      <div className="flex space-x-4 p-2">
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
          ? "bg-amber-200 text-amber-900 font-semibold shadow-md"
          : "text-amber-50 hover:bg-amber-100 hover:text-amber-900"
      }`}
    >
      {children}
    </Link>
  );
}

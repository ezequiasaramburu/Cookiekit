"use client";

import Image from "next/image";

export function Navigation() {
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
          </div>
        </div>
      </div>
    </nav>
  );
}

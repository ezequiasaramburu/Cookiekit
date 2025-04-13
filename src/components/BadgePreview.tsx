import React from "react";
import Image from "next/image";

interface BadgePreviewProps {
  siteName: string;
  privacyPolicyLink: string;
  theme: "light" | "dark";
  position: "bottom-left" | "bottom-right";
}

export const BadgePreview: React.FC<BadgePreviewProps> = ({
  siteName,
  privacyPolicyLink,
  theme,
  position,
}) => {
  // Map position to Tailwind classes
  const positionClasses = {
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`absolute ${
        positionClasses[position]
      } p-4 rounded-lg shadow-lg max-w-[325px] ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col gap-3">
        {/* Text section */}
        <p className="text-sm leading-tight">
          {siteName} uses cookies to enhance your browsing experience.
        </p>

        {/* Link and buttons section */}
        <div className="flex justify-between items-center">
          <a
            href={privacyPolicyLink}
            className={`text-sm underline ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded text-sm ${
                theme === "dark"
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-gray-400 hover:bg-gray-500"
              } text-white`}
            >
              Reject
            </button>
            <button
              className={`px-3 py-1 rounded text-sm ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Accept
            </button>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200">
          <Image
            src="/assets/cookiekit-logo.png"
            alt="CookieKit Logo"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-xs">
            Powered by{" "}
            <a
              href="https://github.com/ezequias/cookiekit"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              CookieKit
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

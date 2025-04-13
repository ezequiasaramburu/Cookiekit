import React from "react";

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
  return (
    <div
      className={`fixed ${position} p-4 rounded-lg shadow-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          {siteName} uses cookies to enhance your experience.
        </p>
        <div className="flex gap-2">
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
    </div>
  );
};

"use client";

import { useState } from "react";
import { BadgePreview } from "@/components/BadgePreview";
import { generateScriptTag } from "@/utils/generateScriptTag";
import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  const [siteName, setSiteName] = useState("");
  const [privacyPolicyLink, setPrivacyPolicyLink] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [position, setPosition] = useState<"bottom-left" | "bottom-right">(
    "bottom-right"
  );
  const [copied, setCopied] = useState(false);

  const scriptTag = generateScriptTag({
    siteName,
    privacyPolicyLink,
    theme,
    position,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout title="Cookie Badge Customizer">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="siteName"
              className="block text-sm font-medium mb-2"
            >
              Site Name
            </label>
            <input
              type="text"
              id="siteName"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your site name"
            />
          </div>

          <div>
            <label
              htmlFor="privacyPolicy"
              className="block text-sm font-medium mb-2"
            >
              Privacy Policy Link
            </label>
            <input
              type="url"
              id="privacyPolicy"
              value={privacyPolicyLink}
              onChange={(e) => setPrivacyPolicyLink(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="https://your-site.com/privacy-policy"
            />
          </div>

          <div>
            <label htmlFor="theme" className="block text-sm font-medium mb-2">
              Theme
            </label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value as "light" | "dark")}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium mb-2"
            >
              Position
            </label>
            <select
              id="position"
              value={position}
              onChange={(e) =>
                setPosition(e.target.value as "bottom-left" | "bottom-right")
              }
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
            <div className="relative h-64 w-full max-w-4xl mx-auto border rounded-lg bg-gray-50">
              <BadgePreview
                siteName={siteName || "Your Site"}
                privacyPolicyLink={privacyPolicyLink || "#"}
                theme={theme}
                position={position}
              />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Embed Code</h2>
            <div className="relative">
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-gray-800">{scriptTag}</code>
              </pre>
            </div>
            <div className="flex justify-end mt-2">
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Copy
                </button>
                {copied && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap">
                    Copied!
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

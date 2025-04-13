"use client";

import { useState } from "react";
import { replacePlaceholders } from "@/utils/templateUtils";
import { privacyPolicyTemplate } from "@/templates/privacyPolicy";
import { PageLayout } from "@/components/PageLayout";

type DataType = "email" | "payment" | "analytics";

export default function PrivacyPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [dataTypes, setDataTypes] = useState<DataType[]>([]);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCheckboxChange = (type: DataType) => {
    if (dataTypes.includes(type)) {
      setDataTypes(dataTypes.filter((t) => t !== type));
    } else {
      setDataTypes([...dataTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPolicy(true);
  };

  const handleCopyToClipboard = () => {
    const policy = generatePolicy();
    navigator.clipboard.writeText(policy);

    // Show tooltip
    setShowTooltip(true);

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const generatePolicy = () => {
    // Generate the data collected list items
    const dataCollectedItems = [];
    if (dataTypes.includes("email")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Email addresses when you sign up for our services</li>"
      );
    }
    if (dataTypes.includes("payment")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Payment information when you make a purchase</li>"
      );
    }
    if (dataTypes.includes("analytics")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Analytics data to improve our services</li>"
      );
    }
    if (dataTypes.length === 0) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>We do not collect any personal data</li>"
      );
    }

    // Generate the data usage list items
    const dataUsageItems = [];
    if (dataTypes.includes("email")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To communicate with you about our services</li>"
      );
    }
    if (dataTypes.includes("payment")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To process your payments</li>"
      );
    }
    if (dataTypes.includes("analytics")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To analyze and improve our website performance</li>"
      );
    }
    if (dataTypes.length === 0) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>We do not use any personal data</li>"
      );
    }

    // Create the data object for replacement
    const data = {
      companyName,
      email,
      date: new Date().toLocaleDateString(),
      dataCollected: dataCollectedItems.join("\n"),
      dataUsage: dataUsageItems.join("\n"),
    };

    // Replace placeholders in the template
    return replacePlaceholders(privacyPolicyTemplate, data);
  };

  return (
    <PageLayout title="Privacy Policy Generator">
      {!showPolicy ? (
        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Data Collected
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="email"
                    checked={dataTypes.includes("email")}
                    onChange={() => handleCheckboxChange("email")}
                    className="mr-2"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="payment"
                    checked={dataTypes.includes("payment")}
                    onChange={() => handleCheckboxChange("payment")}
                    className="mr-2"
                  />
                  <label htmlFor="payment">Payment Info</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={dataTypes.includes("analytics")}
                    onChange={() => handleCheckboxChange("analytics")}
                    className="mr-2"
                  />
                  <label htmlFor="analytics">Analytics</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Generate Privacy Policy
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Privacy Policy</h2>
            <button
              onClick={() => setShowPolicy(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Edit
            </button>
          </div>

          <div
            className="border rounded-lg p-6 bg-white"
            dangerouslySetInnerHTML={{ __html: generatePolicy() }}
          />

          <div className="flex justify-end space-x-4">
            <div className="relative">
              <button
                onClick={handleCopyToClipboard}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
              >
                Copy to Clipboard
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap">
                  Copied!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                const policy = generatePolicy();
                const blob = new Blob([policy], { type: "text/html" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "privacy-policy.html";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Download HTML
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

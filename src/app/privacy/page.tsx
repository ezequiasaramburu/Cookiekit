"use client";

import { useState } from "react";
import { replacePlaceholders } from "@/utils/templateUtils";
import { privacyPolicyTemplate } from "@/templates/privacyPolicy";
import { PageLayout } from "@/components/PageLayout";
import { Checkbox } from "@/components/Checkbox";
import { Button } from "@/components/Button";

type DataType =
  | "email"
  | "payment"
  | "analytics"
  | "personal"
  | "device"
  | "location"
  | "cookies"
  | "social"
  | "behavior"
  | "content"
  | "financial"
  | "health"
  | "employment";

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
    if (dataTypes.includes("personal")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Personal information such as name, address, and contact details</li>"
      );
    }
    if (dataTypes.includes("device")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Device information including IP address, browser type, and operating system</li>"
      );
    }
    if (dataTypes.includes("location")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Location data to provide location-based services</li>"
      );
    }
    if (dataTypes.includes("cookies")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Cookies and similar tracking technologies</li>"
      );
    }
    if (dataTypes.includes("social")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Social media data when you connect with social platforms</li>"
      );
    }
    if (dataTypes.includes("behavior")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>User behavior data to improve user experience</li>"
      );
    }
    if (dataTypes.includes("content")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>User-generated content and communications</li>"
      );
    }
    if (dataTypes.includes("financial")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Financial information for transactions</li>"
      );
    }
    if (dataTypes.includes("health")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Health and biometric data when provided</li>"
      );
    }
    if (dataTypes.includes("employment")) {
      dataCollectedItems.push(
        "<li style='margin-bottom: 8px;'>Employment information for job applications</li>"
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
    if (dataTypes.includes("personal")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To personalize your experience and provide customer support</li>"
      );
    }
    if (dataTypes.includes("device")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To ensure compatibility and optimize our services for your device</li>"
      );
    }
    if (dataTypes.includes("location")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To provide location-based features and services</li>"
      );
    }
    if (dataTypes.includes("cookies")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To remember your preferences and provide a better browsing experience</li>"
      );
    }
    if (dataTypes.includes("social")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To enable social sharing and integration with social platforms</li>"
      );
    }
    if (dataTypes.includes("behavior")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To understand how you use our services and improve them</li>"
      );
    }
    if (dataTypes.includes("content")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To display and manage your content on our platform</li>"
      );
    }
    if (dataTypes.includes("financial")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To process transactions and manage your account</li>"
      );
    }
    if (dataTypes.includes("health")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To provide health-related services and track fitness data</li>"
      );
    }
    if (dataTypes.includes("employment")) {
      dataUsageItems.push(
        "<li style='margin-bottom: 8px;'>To process job applications and manage employment relationships</li>"
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
              <label className="block text-sm font-medium mb-4">
                <span className="inline-block border-b border-gray-300 pb-1">
                  Data Collected
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Checkbox
                    id="email"
                    checked={dataTypes.includes("email")}
                    onChange={() => handleCheckboxChange("email")}
                    label="Email"
                  />
                  <Checkbox
                    id="payment"
                    checked={dataTypes.includes("payment")}
                    onChange={() => handleCheckboxChange("payment")}
                    label="Payment Info"
                  />
                  <Checkbox
                    id="analytics"
                    checked={dataTypes.includes("analytics")}
                    onChange={() => handleCheckboxChange("analytics")}
                    label="Analytics"
                  />
                  <Checkbox
                    id="personal"
                    checked={dataTypes.includes("personal")}
                    onChange={() => handleCheckboxChange("personal")}
                    label="Personal Information"
                  />
                  <Checkbox
                    id="device"
                    checked={dataTypes.includes("device")}
                    onChange={() => handleCheckboxChange("device")}
                    label="Device Information"
                  />
                  <Checkbox
                    id="location"
                    checked={dataTypes.includes("location")}
                    onChange={() => handleCheckboxChange("location")}
                    label="Location Data"
                  />
                  <Checkbox
                    id="cookies"
                    checked={dataTypes.includes("cookies")}
                    onChange={() => handleCheckboxChange("cookies")}
                    label="Cookies and Tracking"
                  />
                </div>
                <div className="space-y-2">
                  <Checkbox
                    id="social"
                    checked={dataTypes.includes("social")}
                    onChange={() => handleCheckboxChange("social")}
                    label="Social Media Data"
                  />
                  <Checkbox
                    id="behavior"
                    checked={dataTypes.includes("behavior")}
                    onChange={() => handleCheckboxChange("behavior")}
                    label="User Behavior"
                  />
                  <Checkbox
                    id="content"
                    checked={dataTypes.includes("content")}
                    onChange={() => handleCheckboxChange("content")}
                    label="Content and Communications"
                  />
                  <Checkbox
                    id="financial"
                    checked={dataTypes.includes("financial")}
                    onChange={() => handleCheckboxChange("financial")}
                    label="Financial Information"
                  />
                  <Checkbox
                    id="health"
                    checked={dataTypes.includes("health")}
                    onChange={() => handleCheckboxChange("health")}
                    label="Health and Biometric Data"
                  />
                  <Checkbox
                    id="employment"
                    checked={dataTypes.includes("employment")}
                    onChange={() => handleCheckboxChange("employment")}
                    label="Employment Information"
                  />
                </div>
              </div>
            </div>

            <Button type="submit">Generate Privacy Policy</Button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Privacy Policy</h2>
            <Button variant="secondary" onClick={() => setShowPolicy(false)}>
              Edit
            </Button>
          </div>

          <div
            className="border rounded-lg p-6 bg-white"
            dangerouslySetInnerHTML={{ __html: generatePolicy() }}
          />

          <div className="flex justify-end space-x-4">
            <div className="relative">
              <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap">
                  Copied!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>
            <Button
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
            >
              Download HTML
            </Button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

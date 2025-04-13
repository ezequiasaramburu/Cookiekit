"use client";

import { useState } from "react";

type DataType = "email" | "payment" | "analytics";

export default function PrivacyPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [dataTypes, setDataTypes] = useState<DataType[]>([]);
  const [showPolicy, setShowPolicy] = useState(false);

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

  const generatePolicy = () => {
    return `
      <div class="privacy-policy" style="color: #333; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6;">
        <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Privacy Policy for ${companyName}</h1>
        <p style="color: #4a5568; margin-bottom: 16px;">Last updated: ${new Date().toLocaleDateString()}</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">1. Introduction</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">${companyName} ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">2. Contact Information</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p style="color: #4a5568; margin-bottom: 16px;">Email: ${email}</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">3. Data We Collect</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">We collect and process the following data about you:</p>
        <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
          ${
            dataTypes.includes("email")
              ? "<li style='margin-bottom: 8px;'>Email addresses when you sign up for our services</li>"
              : ""
          }
          ${
            dataTypes.includes("payment")
              ? "<li style='margin-bottom: 8px;'>Payment information when you make a purchase</li>"
              : ""
          }
          ${
            dataTypes.includes("analytics")
              ? "<li style='margin-bottom: 8px;'>Analytics data to improve our services</li>"
              : ""
          }
          ${
            dataTypes.length === 0
              ? "<li style='margin-bottom: 8px;'>We do not collect any personal data</li>"
              : ""
          }
        </ul>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">4. How We Use Your Data</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">We use your data for the following purposes:</p>
        <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
          ${
            dataTypes.includes("email")
              ? "<li style='margin-bottom: 8px;'>To communicate with you about our services</li>"
              : ""
          }
          ${
            dataTypes.includes("payment")
              ? "<li style='margin-bottom: 8px;'>To process your payments</li>"
              : ""
          }
          ${
            dataTypes.includes("analytics")
              ? "<li style='margin-bottom: 8px;'>To analyze and improve our website performance</li>"
              : ""
          }
          ${
            dataTypes.length === 0
              ? "<li style='margin-bottom: 8px;'>We do not use any personal data</li>"
              : ""
          }
        </ul>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">5. Data Security</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">6. Your Legal Rights</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">7. Changes to the Privacy Policy</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.</p>
      </div>
    `;
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy Generator</h1>

      {!showPolicy ? (
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
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Generate Privacy Policy
          </button>
        </form>
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

          <div className="flex justify-end">
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
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Download HTML
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

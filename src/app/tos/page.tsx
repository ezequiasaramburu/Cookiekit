"use client";

import { useState } from "react";
import { replacePlaceholders } from "@/utils/templateUtils";

type PaymentModel = "free" | "subscription" | "one-time";
type Jurisdiction = "US" | "EU" | "Other";

export default function TermsOfServicePage() {
  const [productName, setProductName] = useState("");
  const [paymentModels, setPaymentModels] = useState<PaymentModel[]>([]);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>("US");
  const [showTerms, setShowTerms] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCheckboxChange = (model: PaymentModel) => {
    if (paymentModels.includes(model)) {
      setPaymentModels(paymentModels.filter((m) => m !== model));
    } else {
      setPaymentModels([...paymentModels, model]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTerms(true);
  };

  const handleCopyToClipboard = () => {
    const terms = generateTerms();
    navigator.clipboard.writeText(terms);

    // Show tooltip
    setShowTooltip(true);

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const generateTerms = () => {
    // Create a template with placeholders
    const template = `
      <div class="terms-of-service" style="color: #333; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6;">
        <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Terms of Service for {{productName}}</h1>
        <p style="color: #4a5568; margin-bottom: 16px;">Last updated: {{date}}</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">1. Introduction</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">Welcome to {{productName}}. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">2. Definitions</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">In these Terms:</p>
        <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
          <li style="margin-bottom: 8px;">"Service" refers to {{productName}} and all related services.</li>
          <li style="margin-bottom: 8px;">"User," "you," and "your" refer to the individual or entity using our Service.</li>
          <li style="margin-bottom: 8px;">"We," "us," and "our" refer to {{productName}}.</li>
        </ul>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">3. Payment Terms</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">Our payment models include:</p>
        <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
          {{paymentModels}}
        </ul>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">4. User Obligations</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">You agree to:</p>
        <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
          <li style="margin-bottom: 8px;">Provide accurate information when using our Service</li>
          <li style="margin-bottom: 8px;">Maintain the security of your account</li>
          <li style="margin-bottom: 8px;">Comply with all applicable laws and regulations</li>
          <li style="margin-bottom: 8px;">Not use our Service for any illegal or unauthorized purpose</li>
        </ul>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">5. Intellectual Property</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">All content, features, and functionality of our Service are owned by {{productName}} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">6. Limitation of Liability</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">To the maximum extent permitted by law, {{productName}} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">7. Governing Law</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">These Terms shall be governed by and construed in accordance with the laws of {{jurisdiction}}, without regard to its conflict of law provisions.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">8. Changes to Terms</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
        
        <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">9. Contact Us</h2>
        <p style="color: #4a5568; margin-bottom: 16px;">If you have any questions about these Terms, please contact us.</p>
      </div>
    `;

    // Generate the payment models list items
    const paymentModelItems = [];
    if (paymentModels.includes("free")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Free: Access to basic features without payment</li>'
      );
    }
    if (paymentModels.includes("subscription")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Subscription: Recurring payments for premium features</li>'
      );
    }
    if (paymentModels.includes("one-time")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">One-time purchases: Pay once for specific features or content</li>'
      );
    }
    if (paymentModels.length === 0) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Our service is currently free to use</li>'
      );
    }

    // Create the data object for replacement
    const data = {
      productName,
      date: new Date().toLocaleDateString(),
      paymentModels: paymentModelItems.join("\n"),
      jurisdiction,
    };

    // Replace placeholders in the template
    return replacePlaceholders(template, data);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service Generator</h1>

      {!showTerms ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Payment Model
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="free"
                  checked={paymentModels.includes("free")}
                  onChange={() => handleCheckboxChange("free")}
                  className="mr-2"
                />
                <label htmlFor="free">Free</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscription"
                  checked={paymentModels.includes("subscription")}
                  onChange={() => handleCheckboxChange("subscription")}
                  className="mr-2"
                />
                <label htmlFor="subscription">Subscriptions</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="one-time"
                  checked={paymentModels.includes("one-time")}
                  onChange={() => handleCheckboxChange("one-time")}
                  className="mr-2"
                />
                <label htmlFor="one-time">One-time purchases</label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="jurisdiction"
              className="block text-sm font-medium mb-2"
            >
              Jurisdiction
            </label>
            <select
              id="jurisdiction"
              value={jurisdiction}
              onChange={(e) => setJurisdiction(e.target.value as Jurisdiction)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="US">US</option>
              <option value="EU">EU</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Generate Terms of Service
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Terms of Service</h2>
            <button
              onClick={() => setShowTerms(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Edit
            </button>
          </div>

          <div
            className="border rounded-lg p-6 bg-white"
            dangerouslySetInnerHTML={{ __html: generateTerms() }}
          />

          <div className="flex justify-end space-x-4">
            <div className="relative">
              <button
                onClick={handleCopyToClipboard}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
                const terms = generateTerms();
                const blob = new Blob([terms], { type: "text/html" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "terms-of-service.html";
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

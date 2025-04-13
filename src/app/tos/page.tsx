"use client";

import { useState } from "react";
import { replacePlaceholders } from "@/utils/templateUtils";
import { termsOfServiceTemplate } from "@/templates/termsOfService";
import { PageLayout } from "@/components/PageLayout";

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
    return replacePlaceholders(termsOfServiceTemplate, data);
  };

  return (
    <PageLayout title="Terms of Service Generator">
      {!showTerms ? (
        <div className="max-w-xl">
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
                onChange={(e) =>
                  setJurisdiction(e.target.value as Jurisdiction)
                }
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Generate Terms of Service
            </button>
          </form>
        </div>
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

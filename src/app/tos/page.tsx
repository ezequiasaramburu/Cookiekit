"use client";

import { useState } from "react";
import { replacePlaceholders } from "@/utils/templateUtils";
import { termsOfServiceTemplate } from "@/templates/termsOfService";
import { PageLayout } from "@/components/PageLayout";
import { Select } from "@/components/Select";
import { Checkbox } from "@/components/Checkbox";
import { Button } from "@/components/Button";

type PaymentModel =
  | "free"
  | "subscription"
  | "one-time"
  | "accounts"
  | "intellectual"
  | "prohibited"
  | "modifications"
  | "disputes"
  | "liability"
  | "retention"
  | "third-party"
  | "termination"
  | "miscellaneous";
type Jurisdiction =
  | "US"
  | "EU"
  | "UK"
  | "Canada"
  | "Australia"
  | "Japan"
  | "China"
  | "India"
  | "Brazil"
  | "Mexico"
  | "South Africa"
  | "Singapore"
  | "Other";

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
    if (paymentModels.includes("accounts")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">User Accounts: Requirements for account creation, password policies, and termination conditions</li>'
      );
    }
    if (paymentModels.includes("intellectual")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Intellectual Property: Copyright ownership, license terms, and user content rights</li>'
      );
    }
    if (paymentModels.includes("prohibited")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Prohibited Activities: Policies against illegal activities, harassment, spam, and abuse</li>'
      );
    }
    if (paymentModels.includes("modifications")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Service Modifications: Right to modify services, notice of changes, and version control</li>'
      );
    }
    if (paymentModels.includes("disputes")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Dispute Resolution: Governing law, arbitration clauses, and jurisdiction</li>'
      );
    }
    if (paymentModels.includes("liability")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Liability Limitations: Disclaimer of warranties, limitation of liability, and indemnification</li>'
      );
    }
    if (paymentModels.includes("retention")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Data Retention: Data storage duration, deletion policies, and portability</li>'
      );
    }
    if (paymentModels.includes("third-party")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Third-Party Services: Links to third-party sites, integrations, and content</li>'
      );
    }
    if (paymentModels.includes("termination")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Termination: Account termination, service discontinuation, and post-termination obligations</li>'
      );
    }
    if (paymentModels.includes("miscellaneous")) {
      paymentModelItems.push(
        '<li style="margin-bottom: 8px;">Miscellaneous: Severability, entire agreement, and assignment</li>'
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
              <label className="block text-sm font-medium mb-4">
                <span className="inline-block border-b border-gray-300 pb-1">
                  Service Terms
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Checkbox
                    id="free"
                    checked={paymentModels.includes("free")}
                    onChange={() => handleCheckboxChange("free")}
                    label="Free"
                  />
                  <Checkbox
                    id="subscription"
                    checked={paymentModels.includes("subscription")}
                    onChange={() => handleCheckboxChange("subscription")}
                    label="Subscriptions"
                  />
                  <Checkbox
                    id="one-time"
                    checked={paymentModels.includes("one-time")}
                    onChange={() => handleCheckboxChange("one-time")}
                    label="One-time purchases"
                  />
                  <Checkbox
                    id="accounts"
                    checked={paymentModels.includes("accounts")}
                    onChange={() => handleCheckboxChange("accounts")}
                    label="User Accounts"
                  />
                  <Checkbox
                    id="intellectual"
                    checked={paymentModels.includes("intellectual")}
                    onChange={() => handleCheckboxChange("intellectual")}
                    label="Intellectual Property"
                  />
                  <Checkbox
                    id="prohibited"
                    checked={paymentModels.includes("prohibited")}
                    onChange={() => handleCheckboxChange("prohibited")}
                    label="Prohibited Activities"
                  />
                  <Checkbox
                    id="modifications"
                    checked={paymentModels.includes("modifications")}
                    onChange={() => handleCheckboxChange("modifications")}
                    label="Service Modifications"
                  />
                </div>
                <div className="space-y-2">
                  <Checkbox
                    id="disputes"
                    checked={paymentModels.includes("disputes")}
                    onChange={() => handleCheckboxChange("disputes")}
                    label="Dispute Resolution"
                  />
                  <Checkbox
                    id="liability"
                    checked={paymentModels.includes("liability")}
                    onChange={() => handleCheckboxChange("liability")}
                    label="Liability Limitations"
                  />
                  <Checkbox
                    id="retention"
                    checked={paymentModels.includes("retention")}
                    onChange={() => handleCheckboxChange("retention")}
                    label="Data Retention"
                  />
                  <Checkbox
                    id="third-party"
                    checked={paymentModels.includes("third-party")}
                    onChange={() => handleCheckboxChange("third-party")}
                    label="Third-Party Services"
                  />
                  <Checkbox
                    id="termination"
                    checked={paymentModels.includes("termination")}
                    onChange={() => handleCheckboxChange("termination")}
                    label="Termination"
                  />
                  <Checkbox
                    id="miscellaneous"
                    checked={paymentModels.includes("miscellaneous")}
                    onChange={() => handleCheckboxChange("miscellaneous")}
                    label="Miscellaneous"
                  />
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
              <Select
                id="jurisdiction"
                value={jurisdiction}
                onChange={(e) =>
                  setJurisdiction(e.target.value as Jurisdiction)
                }
              >
                <option value="US">United States</option>
                <option value="EU">European Union</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
                <option value="South Africa">South Africa</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <Button type="submit">Generate Terms of Service</Button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Terms of Service</h2>
            <Button variant="secondary" onClick={() => setShowTerms(false)}>
              Edit
            </Button>
          </div>

          <div
            className="border rounded-lg p-6 bg-white"
            dangerouslySetInnerHTML={{ __html: generateTerms() }}
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
            >
              Download HTML
            </Button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

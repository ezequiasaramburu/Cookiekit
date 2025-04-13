import { Metadata } from "next";
import TermsOfServicePage from "./page";
import { defaultMetadata } from "../metadata";

export const metadata: Metadata = defaultMetadata;

export default function TermsOfServicePageWrapper() {
  return <TermsOfServicePage />;
}

import { Metadata } from "next";
import PrivacyPage from "./page";
import { defaultMetadata } from "../metadata";

export const metadata: Metadata = defaultMetadata;

export default function PrivacyPageWrapper() {
  return <PrivacyPage />;
}

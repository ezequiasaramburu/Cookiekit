import { Metadata } from "next";
import HomePage from "./page";
import { defaultMetadata } from "./metadata";

export const metadata: Metadata = defaultMetadata;

export default function HomePageWrapper() {
  return <HomePage />;
}

import type { Metadata } from "next";

/* shortcut mr */
export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Title",
  // keywords: ["About Page", "Jonathan", "Información"],
};

export default function AboutPage() {
  return <span className="text-7xl ">About page</span>;
}

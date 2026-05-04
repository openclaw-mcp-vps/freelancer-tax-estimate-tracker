import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxTrack — Real-time tax estimates for freelancers",
  description: "Automatically calculate quarterly tax estimates and set aside money. Connect your bank and invoicing tools in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a986b6fe-6817-4441-a59c-86895d22438c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

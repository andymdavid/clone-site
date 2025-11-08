import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables, inter } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Clone — AI Automation Agency",
    template: "%s — Clone",
  },
  description:
    "Clone of the Clone AI automation marketing site showcasing hero storytelling, interactive services, and lead-gen flows.",
  metadataBase: new URL("https://clone-replica.local"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-white`}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

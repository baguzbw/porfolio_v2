import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Yellowtail } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import { BackToTop } from "@/components/BackToTop";
import { profile } from "@/data/profile";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const signature = Yellowtail({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${signature.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <BackToTop />
          <div className="mx-auto flex min-h-screen max-w-[1280px]">
            <div className="sticky top-0 hidden h-screen w-[336px] flex-shrink-0 md:block">
              <Sidebar />
            </div>
            <div className="min-w-0 flex-1">
              <MobileNav />
              <main className="px-5 py-10 md:px-6">
                <div className="mx-auto max-w-5xl">
                  <PageTransition>{children}</PageTransition>
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

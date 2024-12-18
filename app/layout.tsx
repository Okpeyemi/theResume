import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Maqsoud.Tawaliou - Portfolio",
  description: "Salut, Je suis Maqsoud - Web Developper + UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
       <link rel="icon" href="/assets/images/logo.png" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

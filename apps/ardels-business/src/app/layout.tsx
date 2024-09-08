import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@repo/ui/toaster";
import ReactQueryCleientProvider from "~/components/ReactQueryClientProvider";

const brFirma = localFont({
  src: [
    { path: "../../public/fonts/br-firma/BR Firma Thin.otf", weight: "100" },
    {
      path: "../../public/fonts/br-firma/BR Firma Extra Light.otf",
      weight: "200",
    },
    { path: "../../public/fonts/br-firma/BR Firma Light.otf", weight: "300" },
    { path: "../../public/fonts/br-firma/BR Firma Regular.otf", weight: "400" },
    { path: "../../public/fonts/br-firma/BR Firma Medium.otf", weight: "500" },
    {
      path: "../../public/fonts/br-firma/BR Firma SemiBold.otf",
      weight: "600",
    },
    { path: "../../public/fonts/br-firma/BR Firma Bold.otf", weight: "700" },
    { path: "../../public/fonts/br-firma/BR Firma Black.otf", weight: "900" },
  ],
});

export const metadata: Metadata = {
  title: "Ardels",
  description: "HR platform",
  publisher: "@kayode-dev on github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryCleientProvider>
      <html lang="en">
        <body
          className={`${brFirma.className} bg-white text-black`}
          suppressHydrationWarning
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ReactQueryCleientProvider>
  );
}

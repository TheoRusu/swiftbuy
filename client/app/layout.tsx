import Providers from "./provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwiftBuy",
  description: "eCommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

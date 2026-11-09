import type { Metadata } from "next";
import "./globals.css";

const description =
  "Mahmoud Shehto, front-end developer in Ismailia, Egypt. React, WordPress and WooCommerce websites, booking systems and online stores.";

export const metadata: Metadata = {
  title: "Mahmoud Shehto | Front-End Developer, React & WordPress",
  description,
  openGraph: { title: "Mahmoud Shehto | Front-End Developer", description, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}

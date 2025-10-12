import Navigation from "./layout ui/navigation";
import type { Metadata } from "next";
import "../globals.css";
import ContactUs from "./layout ui/contact-us";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "r/alevel",
  description: "World's Largest A-Level Community",
  // keywords:
  // "alevel, a-level, a level, alevel community, a-level community, cambridge, edexcel",

  openGraph: {
    images: ["https://r-alevel.netlify.app/opengraph-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
        <ContactUs />
      </body>
    </html>
  );
}

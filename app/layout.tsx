import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/serge_gabriel_colin_gold.png",
    apple: "/serge_gabriel_colin_gold.png",
  },
  authors: [
    { name: "Serge Gabriel Collin", url: "https://sergegabrielcollin.com" },
    { name: "Syntax Studio", url: "https://syntaxstudio.io" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

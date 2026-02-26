import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/serge_gabriel_colin_gold.png",
    apple: "/serge_gabriel_colin_gold.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

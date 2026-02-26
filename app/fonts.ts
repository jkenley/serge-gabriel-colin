import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

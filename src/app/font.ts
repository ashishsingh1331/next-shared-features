import { Roboto, Inter } from "next/font/google";
export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const inter = Inter({ subsets: ["latin"] });

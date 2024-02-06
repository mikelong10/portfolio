import { DM_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
export const dmSans = DM_Sans({
  subsets: ["latin"],
});
export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "500",
});

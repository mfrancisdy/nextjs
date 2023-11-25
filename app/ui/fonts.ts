import { Poppins } from "next/font/google";

export const poppins = Poppins({
  display: "swap", // Use the "swap" font-display strategy
  weight: ["300", "400", "500", "600", "700"], // Specify font weight variants
  subsets: ["latin"], // Specify subsets, such as latin
});

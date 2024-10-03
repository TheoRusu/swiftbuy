"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Hind } from "next/font/google";

// Import the Hind font from Google
const hind = Hind({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Extend the default Chakra theme
const theme = extendTheme({
  fonts: {
    heading: `${hind.style.fontFamily}, sans-serif`,
    body: `${hind.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      50: "#B2F7EF",
      100: "#7BDFF2",
      200: "#EFF7F6",
      300: "#F7D6E0",
      400: "#F2B5D4",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

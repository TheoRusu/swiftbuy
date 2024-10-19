"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
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
      50: "#7df1e4",
      100: "#7BDFF2",
      200: "#EFF7F6",
      300: "#F7D6E0",
      400: "#F2B5D4",
    },
  },
  components: {
    Input: {
      // Customize the Input component
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "#7df1e4", // Set the focus border color
              boxShadow: "0 0 0 1px #7df1e4", // Optional: Add a box shadow for focus
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "#7df1e4",
          color: "white",
          _hover: {
            bg: "lightgray",
          },
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light" />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

// Import Inter font instead of Hind to match our style guide
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Define semantic colors for reuse
const colors = {
  background: "#1C1C1C",
  surface: "#2A2A2A",
  primary: "#7BDFF2",
  success: "#22C55E",
  error: "#EF4444",
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.8)",
  },
  icon: {
    secondary: "rgba(255, 255, 255, 0.5)", // equivalent to whiteAlpha.500
  },
};

// Extend the default Chakra theme
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `${inter.style.fontFamily}, sans-serif`,
    body: `${inter.style.fontFamily}, sans-serif`,
  },
  shadows: {
    main: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  colors: {
    brand: {
      50: colors.primary,
      100: colors.primary,
      500: colors.primary,
      main: colors.primary,
      dark: colors.background,
      surface: colors.surface,
      iconSecondary: colors.icon.secondary,
      textSecondary: colors.text.secondary,
    },
  },
  styles: {
    global: {
      body: {
        bg: colors.background,
        color: colors.text.primary,
      },
      a: {
        color: "brand.main",
        fontWeight: "600",
        textDecoration: "none",
        transition: "all 0.2s",
        _hover: {
          color: "brand.main",
          textDecoration: "none",
          opacity: 0.8,
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "6px",
        fontWeight: "600",
        transition: "all 0.2s",
      },
      variants: {
        primary: {
          bg: "brand.main",
          color: "brand.dark",
          _hover: {
            transform: "scale(1.02)",
            opacity: 0.9,
            _disabled: {
              bg: "brand.main",
            },
          },
        },
        secondary: {
          bg: "transparent",
          color: "brand.main",
          border: "2px solid",
          borderColor: "brand.main",
          _hover: {
            bg: "rgba(123, 223, 242, 0.1)",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: "brand.dark",
            border: "2px solid",
            borderColor: "brand.surface",
            borderRadius: "6px",
            _placeholder: {
              color: "rgba(255, 255, 255, 0.5)",
            },
            _focus: {
              borderColor: "brand.main",
              boxShadow: "none",
            },
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "brand.surface",
          borderRadius: "8px",
          padding: "16px",
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "16px",
        padding: "4px 12px",
        textTransform: "none",
        fontWeight: "600",
      },
      variants: {
        primary: {
          bg: "rgba(123, 223, 242, 0.2)",
          color: "brand.main",
        },
        secondary: {
          bg: "rgba(255, 255, 255, 0.1)",
          color: "white",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Alert: {
      variants: {
        success: {
          container: {
            bg: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.2)",
          },
          icon: { color: colors.success },
          title: { color: colors.success },
          description: { color: colors.success },
        },
        error: {
          container: {
            bg: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
          },
          icon: { color: colors.error },
          title: { color: colors.error },
          description: { color: colors.error },
        },
      },
    },
  },
});

export default theme;

"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import theme from "./theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  );
};

export default Providers;

"use client";
import { Box, Button, Input, Link, Spinner } from "@chakra-ui/react";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      push("/login");
    }
  }, [isAuthenticated, isLoading, push]);

  if (isLoading) {
    return <Spinner />;
  } else if (isAuthenticated) {
    return (
      <Box color={"colors.main"} width={"300px"} marginLeft={"100px"}>
        <Button margin={"100px"} onClick={() => logout()}>
          {" "}
          Logout{" "}
        </Button>
      </Box>
    );
  } else {
    return null;
  }
};

export default Home;

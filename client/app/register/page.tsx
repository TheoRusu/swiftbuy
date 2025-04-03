import React from "react";
import { Container, Flex, Image, Center } from "@chakra-ui/react";
import myLogo from "../logos/logo.png";
import { SignInForm } from "../components/SignInForm";

const Register: React.FC = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <Container maxW={"container.md"} textAlign={"center"}>
        <Center>
          <Image
            width={"180px"}
            marginY={"75px"}
            objectFit="contain"
            src={myLogo.src}
            alt="logo"
          />
        </Center>
        <SignInForm
          isRegister={true}
          linkName="/login"
          linkText="Already have an account?"
          buttonText="Sign Up"
        />
      </Container>
    </Flex>
  );
};

export default Register;

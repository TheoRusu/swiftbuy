import { Container, Flex, Image, Center } from "@chakra-ui/react";

import myLogo from "../logos/logo.png";
import { SignInForm } from "../components/SignInForm";

const Login: React.FC = () => {
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
          isRegister={false}
          linkName="/register"
          linkText="New to us?"
          buttonText="Login"
        />
      </Container>
    </Flex>
  );
};

export default Login;

import {
  Box,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
  Image,
  Center,
  Button,
  Link,
} from "@chakra-ui/react";

import myLogo from "../logos/horizontal-logo.png";
import PasswordInput from "../components/PasswordInput";

export default function page() {
  return (
    <Flex width={"100vw"} height={"100vh"} justifyContent={"center"}>
      <Container maxW={"container.md"} textAlign={"center"}>
        <Center>
          <Image
            boxSize="50%"
            objectFit="contain"
            src={myLogo.src}
            alt="logo"
          />
        </Center>
        <Box
          bg={"white"}
          borderRadius={"5px"}
          boxShadow="lg"
          paddingX={"20px"}
          paddingY={"50px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormControl width={"75%"}>
            <Input type="email" placeholder="Email" />
          </FormControl>
          <FormControl marginTop={"20px"} width={"75%"}>
            <PasswordInput register={false} />
          </FormControl>
          <Button marginTop={"20px"} width={"30%"}>
            Login
          </Button>
        </Box>
        <Text marginTop={"15px"} fontSize={"18px"}>
          New to us?{" "}
          <Link color="teal.500" href="/register">
            Sign Up
          </Link>
        </Text>
      </Container>
    </Flex>
  );
}

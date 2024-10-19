import React from "react";
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  HStack,
  Center,
  Button,
  Link,
} from "@chakra-ui/react";
import myLogo from "../logos/horizontal-logo.png";
import PasswordInput from "../components/PasswordInput";

type Props = {};

function page() {
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
            <PasswordInput register={true} />
          </FormControl>
          <Button marginTop={"20px"} width={"30%"}>
            Register
          </Button>
        </Box>
        <Text marginTop={"15px"} fontSize={"18px"}>
          Already have an account?{" "}
          <Link color="teal.500" href="/login">
            Log In
          </Link>
        </Text>
      </Container>
    </Flex>
  );
}

export default page;

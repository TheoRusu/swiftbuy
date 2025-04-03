"use client";
import {
  Box,
  Button,
  Input,
  Text,
  Link,
  Heading,
  VStack,
  Icon,
  InputRightElement,
  InputLeftElement,
  FormControl,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { login, register } from "../api/auth";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

type Props = {
  isRegister: boolean;
  linkName: string;
  buttonText: string;
  linkText: string;
};

export const SignInForm: React.FC<Props> = ({
  isRegister,
  linkName,
  buttonText,
  linkText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();
  const { setToken } = useAuth();

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (isRegister) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.id]: "",
      general: "", // Also clear general error when user starts typing
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    });

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = isRegister
        ? await register(formData.email, formData.password)
        : await login(formData.email, formData.password);

      if (response.error) {
        setErrors({ ...errors, general: response.error });
      } else if (response.token) {
        setToken(response.token);
        push("/"); // Redirect to dashboard after successful login
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
      console.log(errors);
    }
  };

  return (
    <Box
      bg="brand.surface"
      borderRadius="12px"
      shadow="xl"
      p={{ base: "6", md: "8" }}
      width={{ base: "90%", sm: "400px" }}
      mx="auto"
    >
      <VStack spacing="6" align="stretch">
        <VStack spacing="3">
          <Heading size="lg" color="brand.main" textAlign="center">
            Welcome to SwiftBuy
          </Heading>
          <Text color="brand.textSecondary" fontSize="sm" textAlign="center">
            {isRegister
              ? "Create an account to start shopping"
              : "Sign in to continue shopping"}
          </Text>
        </VStack>

        <form onSubmit={handleSubmit}>
          <VStack spacing="4">
            <FormControl isInvalid={!!errors.email}>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={Mail} color="brand.iconSecondary" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="lg"
                />
              </InputGroup>
              {errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={Lock} color="brand.iconSecondary" />
                </InputLeftElement>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  size="lg"
                />
                <InputRightElement>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    _hover={{ bg: "transparent" }}
                  >
                    <Icon
                      as={showPassword ? EyeOff : Eye}
                      color="brand.iconSecondary"
                    />
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>

            {isRegister && (
              <FormControl isInvalid={!!errors.confirmPassword}>
                <InputGroup>
                  <InputLeftElement>
                    <Icon as={Lock} color="brand.iconSecondary" />
                  </InputLeftElement>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    size="lg"
                  />
                  <InputRightElement>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      _hover={{ bg: "transparent" }}
                    >
                      <Icon
                        as={showConfirmPassword ? EyeOff : Eye}
                        color="brand.iconSecondary"
                      />
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.confirmPassword && (
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                )}
              </FormControl>
            )}

            <Button
              type="submit"
              variant="primary"
              width="full"
              size="lg"
              isLoading={isLoading}
              loadingText={isRegister ? "Creating Account" : "Signing In"}
            >
              {buttonText}
            </Button>
          </VStack>
        </form>

        {errors.general && (
          <Text color="red.400" fontSize="sm" textAlign="center">
            {errors.general}
          </Text>
        )}

        <Text textAlign="center" color="brand.textSecondary">
          {linkText}{" "}
          <Link
            href={linkName}
            color="brand.main"
            _hover={{ textDecoration: "none", opacity: 0.8 }}
          >
            {buttonText === "Sign Up" ? "Login" : "Sign Up"}
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

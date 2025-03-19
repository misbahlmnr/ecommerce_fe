"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { z } from "zod";

interface LoginFormInput {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box
      p={6}
      width={{ base: "90%", md: "500px" }}
      borderRadius={"md"}
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Heading as={"h1"} mb={4}>
        Masuk Akun
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root
          mb={2}
          orientation="vertical"
          invalid={!!errors.email}
          required
        >
          <Field.Label>
            Email
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="email"
            placeholder="Masukkan email"
            colorPalette={"blue"}
            {...register("email")}
          />
          {errors.email && (
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root
          mb={5}
          orientation="vertical"
          invalid={!!errors.password}
          required
        >
          <Field.Label>
            Password
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="password"
            placeholder="Masukkan password"
            colorPalette={"blue"}
            {...register("password")}
          />
          {errors.password && (
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Button type="submit" colorPalette={"blue"}>
          Login
        </Button>
      </form>
      <Text mt={5} fontSize={"sm"}>
        Belum punya akun? Daftar{" "}
        <ChakraLink as={NextLink} href={"/register"} color="blue.400">
          disini
        </ChakraLink>
      </Text>
    </Box>
  );
};

export default LoginForm;

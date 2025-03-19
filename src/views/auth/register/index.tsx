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
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface RegisterFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = z
  .object({
    name: z.string(),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z.string().min(6, "Password minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
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
        Daftar Akun
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root
          mb={2}
          orientation="vertical"
          invalid={!!errors.name}
          required
        >
          <Field.Label>
            Nama
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="text"
            placeholder="Masukkan nama"
            colorPalette={"blue"}
            {...register("name")}
          />
          {errors.name && (
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          )}
        </Field.Root>

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
          mb={2}
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

        <Field.Root
          mb={5}
          orientation="vertical"
          invalid={!!errors.confirmPassword}
          required
        >
          <Field.Label>
            Konfirmasi Password
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="password"
            placeholder="Masukkan konfirmasi password"
            colorPalette={"blue"}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Button type="submit" colorPalette={"blue"}>
          Daftar
        </Button>
      </form>
      <Text mt={5} fontSize={"sm"}>
        Sudah punya akun? Masuk{" "}
        <ChakraLink as={NextLink} href={"/login"} color="blue.400">
          disini
        </ChakraLink>
      </Text>
    </Box>
  );
};

export default RegisterForm;

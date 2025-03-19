"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Field, Heading, Input } from "@chakra-ui/react";

const RegisterForm = () => {
  return (
    <Box
      p={6}
      width={"500px"}
      borderRadius={"md"}
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Heading as={"h1"} mb={4}>
        Daftar Akun
      </Heading>
      <form>
        <Field.Root orientation="vertical" mb={2} required>
          <Field.Label>
            Nama
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="text"
            placeholder="Masukkan nama"
            colorPalette={"blue"}
          />
        </Field.Root>

        <Field.Root orientation="vertical" mb={2} required>
          <Field.Label>
            Email
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="email"
            placeholder="Masukkan email"
            colorPalette={"blue"}
          />
        </Field.Root>

        <Field.Root orientation="vertical" mb={2} required>
          <Field.Label>
            Password
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="password"
            placeholder="Masukkan password"
            colorPalette={"blue"}
          />
        </Field.Root>

        <Field.Root orientation="vertical" mb={5} required>
          <Field.Label>
            Konfirmasi Password
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="confirm_password"
            placeholder="Masukkan konfirmasi password"
            colorPalette={"blue"}
          />
        </Field.Root>

        <Button colorPalette={"blue"}>Daftar</Button>
      </form>
    </Box>
  );
};

export default RegisterForm;

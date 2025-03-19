import { Stack } from "@chakra-ui/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack h="100vh" justifyContent="center" alignItems="center">
      {children}
    </Stack>
  );
}

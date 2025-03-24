"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  Drawer,
  useDisclosure,
  Menu,
  Portal,
  Link,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import NextLink from "next/link";
import { ColorModeButton, useColorModeValue } from "@/shared/ui/color-mode";

// Types
import {
  DashboardTemplateProps,
  LinkItemProps,
  MobileProps,
  NavItemProps,
  SidebarProps,
} from "./Types";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.800")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Ecommerce
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link as={NextLink} href="#" w={"100%"} style={{ textDecoration: "none" }}>
      <Flex
        p="3"
        mx="4"
        w="full"
        role="group"
        align="center"
        cursor="pointer"
        borderRadius="lg"
        _hover={{
          bg: useColorModeValue("gray.100", "gray.700"),
          color: useColorModeValue("gray.900", "gray.100"),
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      >
        <FiMenu />
      </IconButton>

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontWeight="bold"
      >
        Ecommerce
      </Text>

      <HStack gap={5}>
        <ColorModeButton />
        <IconButton size="lg" variant="ghost" aria-label="open menu">
          <FiBell />
        </IconButton>
        <Flex alignItems={"center"}>
          <Menu.Root>
            <Menu.Trigger
              asChild
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack gap={2}>
                <Avatar.Root>
                  <Avatar.Fallback name="Misbah" />
                  <Avatar.Image src="https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE" />
                </Avatar.Root>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                >
                  <Text fontSize="sm">Misbah</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <Menu.Item value="Profile">Profile</Menu.Item>
                  <Menu.Item value="Settings">Settings</Menu.Item>
                  <Menu.Item value="Sign out">Sign out</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </HStack>
    </Flex>
  );
};

const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer.Root open={open} onOpenChange={onClose} size="full">
        <Drawer.Content>
          <SidebarContent onClose={onClose} />
        </Drawer.Content>
      </Drawer.Root>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default DashboardTemplate;

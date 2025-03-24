"use client";

import Table from "@/components/Table";
import { Heading, HStack, Stack, Button } from "@chakra-ui/react";

const DashboardPage = () => {
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
  ];

  const items = [
    {
      id: "1",
      name: "Laptop",
      price: 999.99,
      description:
        "Powerful laptop with high-performance specs for work and gaming.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE",
    },
    {
      id: "2",
      name: "Coffee Maker",
      price: 49.99,
      description:
        "Brew the perfect cup of coffee with this easy-to-use coffee maker.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE",
    },
    {
      id: "3",
      name: "Desk Chair",
      price: 150.0,
      description:
        "Ergonomic desk chair designed for maximum comfort and support.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE",
    },
    {
      id: "4",
      name: "Smartphone",
      price: 799.99,
      description:
        "Latest smartphone with cutting-edge features and a sleek design.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE",
    },
    {
      id: "5",
      name: "Headphones",
      price: 199.99,
      description:
        "High-quality wireless headphones with noise-canceling technology.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz_CL0M7Q_RQ/profile-displayphoto-shrink_800_800/B56ZQLj.DNG8Ag-/0/1735360768110?e=1747872000&v=beta&t=PvrqdphDeYHVZIgNDvu0ePlD8XHDm9aE_WsqMkQw3CE",
    },
  ];

  return (
    <Stack p={5}>
      <HStack justifyContent="space-between" alignItems="center" mb="5">
        <Heading as="h1" fontSize="2xl">
          List Product
        </Heading>
        <Button colorPalette="blue" size="sm">
          Add Product
        </Button>
      </HStack>

      <Table data={items} columns={columns} />
    </Stack>
  );
};

export default DashboardPage;

"use client";

import { useMemo, useState } from "react";
import Table from "@/components/Table";
import { Heading, HStack, Stack, Button } from "@chakra-ui/react";
import { mockDataTable } from "@/shared/Constant";
import { ColumnDef } from "@tanstack/react-table";
import { FormAddProduct } from "@/components/FormProduct";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const columns = useMemo<ColumnDef<Product, any>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: (props) => props.getValue(),
      },
    ],
    []
  );

  const [data] = useState<Product[]>(mockDataTable);

  return (
    <Stack p={5}>
      <HStack justifyContent="space-between" alignItems="center" mb="5">
        <Heading
          as="h1"
          fontSize="2xl"
          fontWeight="bold"
          color="slate.700"
          _dark={{ color: "slate.50" }}
        >
          List Product
        </Heading>
        <Button
          colorPalette="purple"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Product
        </Button>
      </HStack>

      <Table data={data} columns={columns} />

      <FormAddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Stack>
  );
};

export default DashboardPage;

"use client";

import { Table as ChakraTable, IconButton } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Props } from "./Type";

const Table = <T,>({ data, columns }: Props<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ChakraTable.Root size={"md"} borderRadius={"sm"} overflow={"hidden"}>
      <ChakraTable.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <ChakraTable.Row key={headerGroup.id} bgColor="purple.500">
            {headerGroup.headers.map((header) => (
              <ChakraTable.ColumnHeader
                key={header.id}
                px={10}
                color={"white"}
                minWidth={"100px"}
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </ChakraTable.ColumnHeader>
            ))}
            <ChakraTable.ColumnHeader
              px={10}
              color={"white"}
              minWidth={"100px"}
            >
              Actions
            </ChakraTable.ColumnHeader>
          </ChakraTable.Row>
        ))}
      </ChakraTable.Header>
      <ChakraTable.Body>
        {table.getRowModel().rows.map((row, idx) => {
          const isOdd = idx % 2 === 0;
          return (
            <ChakraTable.Row
              key={row.id}
              bg={isOdd ? "gray.100" : "white"}
              _dark={{ bg: isOdd ? "gray.700" : "gray.800" }}
            >
              {row.getVisibleCells().map((cell) => (
                <ChakraTable.Cell key={cell.id} px={10}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ChakraTable.Cell>
              ))}
              <ChakraTable.Cell px={10}>
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="open menu"
                  colorPalette={"yellow"}
                >
                  <MdOutlineEdit />
                </IconButton>
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="open menu"
                  colorPalette={"green"}
                >
                  <FaEye />
                </IconButton>
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="open menu"
                  colorPalette={"red"}
                >
                  <LuTrash2 />
                </IconButton>
              </ChakraTable.Cell>
            </ChakraTable.Row>
          );
        })}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};

export default Table;

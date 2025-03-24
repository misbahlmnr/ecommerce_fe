"use client";

import { Table as ChakraTable } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
          <ChakraTable.Row key={headerGroup.id} bgColor="blue.600">
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
          </ChakraTable.Row>
        ))}
      </ChakraTable.Header>
      <ChakraTable.Body>
        {table.getRowModel().rows.map((row) => (
          <ChakraTable.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <ChakraTable.Cell key={cell.id} px={10}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </ChakraTable.Cell>
            ))}
          </ChakraTable.Row>
        ))}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};

export default Table;

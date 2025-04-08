"use client";

import {
  ButtonGroup,
  Table as ChakraTable,
  NativeSelect,
  HStack,
  Icon,
  IconButton,
  Pagination,
  Stack,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { FaEye, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Props } from "./Types";
import SearchInput from "./SearchInput";
import { useState } from "react";

const Table = <T,>({ data, columns, onEdit, onView, onDelete }: Props<T>) => {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <HStack justify={"space-between"} mb={3}>
        <NativeSelect.Root
          key={"xs"}
          size={"md"}
          w="130px"
          colorPalette="purple"
        >
          <NativeSelect.Field
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 50, 100, 500].map((pageSize, idx) => (
              <option key={idx} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <SearchInput
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </HStack>
      <ChakraTable.Root borderRadius={"sm"} overflow={"hidden"} width={"100%"}>
        <ChakraTable.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <ChakraTable.Row key={headerGroup.id} bgColor="purple.500">
              {headerGroup.headers.map((header) => (
                <ChakraTable.ColumnHeader
                  key={header.id}
                  color={"white"}
                  minWidth={"100px"}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanSort() && (
                    <Icon
                      as={FaSort}
                      mx={3}
                      fontSize={14}
                      _hover={{
                        cursor: "pointer",
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                    />
                  )}
                  {header.column.getIsSorted() && (
                    <Icon
                      as={
                        {
                          asc: FaSortUp,
                          desc: FaSortDown,
                        }[header.column.getIsSorted() as "asc" | "desc"]
                      }
                      mx={1}
                      fontSize={14}
                    />
                  )}
                </ChakraTable.ColumnHeader>
              ))}
              {(onEdit || onView || onDelete) && (
                <ChakraTable.ColumnHeader
                  px={10}
                  color={"white"}
                  minWidth={"100px"}
                >
                  Actions
                </ChakraTable.ColumnHeader>
              )}
            </ChakraTable.Row>
          ))}
        </ChakraTable.Header>
        <ChakraTable.Body>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, idx) => {
              const isOdd = idx % 2 === 0;
              return (
                <ChakraTable.Row
                  key={row.id}
                  bg={isOdd ? "slate.100" : "white"}
                  _dark={{ bg: isOdd ? "slate.600" : "slate.700" }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <ChakraTable.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </ChakraTable.Cell>
                  ))}
                  <ChakraTable.Cell>
                    {onEdit && (
                      <IconButton
                        size="xs"
                        variant="ghost"
                        aria-label="edit item"
                        colorPalette="yellow"
                        onClick={onEdit}
                      >
                        <MdOutlineEdit />
                      </IconButton>
                    )}
                    {onView && (
                      <IconButton
                        size="xs"
                        variant="ghost"
                        aria-label="view item"
                        colorPalette="green"
                        onClick={onView}
                      >
                        <FaEye />
                      </IconButton>
                    )}
                    {onDelete && (
                      <IconButton
                        size="xs"
                        variant="ghost"
                        aria-label="delete item"
                        colorPalette="red"
                        onClick={() => {}}
                      >
                        <LuTrash2 />
                      </IconButton>
                    )}
                  </ChakraTable.Cell>
                </ChakraTable.Row>
              );
            })
          ) : (
            <ChakraTable.Row>
              <ChakraTable.Cell px={10} colSpan={columns.length + 1}>
                No result
              </ChakraTable.Cell>
            </ChakraTable.Row>
          )}
        </ChakraTable.Body>
      </ChakraTable.Root>

      <Stack display="flex" alignItems="flex-end" px="5" py="2">
        <Pagination.Root
          pageSize={1}
          count={table.getPageCount()}
          page={table.getState().pagination.pageIndex + 1}
        >
          <ButtonGroup variant="ghost" size="xs" wrap="wrap">
            {/* Previous Page Button */}
            <Pagination.PrevTrigger asChild>
              <IconButton
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            {/* Pagination Items (Page Numbers) */}
            <Pagination.Items
              render={(page) => {
                const isActive =
                  table.getState().pagination.pageIndex + 1 === page.value;
                return (
                  <IconButton
                    onClick={() => table.setPageIndex(page.value - 1)}
                    colorPalette={isActive ? "purple" : "gray"}
                    variant={{
                      base: "ghost",
                      _selected: isActive ? "outline" : "ghost",
                    }}
                  >
                    {page.value}
                  </IconButton>
                );
              }}
            />

            {/* Next Page Button */}
            <Pagination.NextTrigger asChild>
              <IconButton
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Stack>
    </>
  );
};

export default Table;

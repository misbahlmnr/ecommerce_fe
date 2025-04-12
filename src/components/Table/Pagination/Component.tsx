"use client";

import {
  ButtonGroup,
  IconButton,
  Pagination as PaginationChakra,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Props } from "./Types";

const Pagination = ({ table }: Props) => {
  return (
    <PaginationChakra.Root
      pageSize={1}
      count={table.getPageCount()}
      page={table.getState().pagination.pageIndex + 1}
    >
      <ButtonGroup variant="ghost" size="xs" wrap="wrap">
        {/* Previous Page Button */}
        <PaginationChakra.PrevTrigger asChild>
          <IconButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronLeft />
          </IconButton>
        </PaginationChakra.PrevTrigger>
        {/* Pagination Items (Page Numbers) */}
        <PaginationChakra.Items
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
        <PaginationChakra.NextTrigger asChild>
          <IconButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronRight />
          </IconButton>
        </PaginationChakra.NextTrigger>
      </ButtonGroup>
    </PaginationChakra.Root>
  );
};

export default Pagination;

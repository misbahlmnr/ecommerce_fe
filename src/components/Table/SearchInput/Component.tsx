import { Input, InputGroup } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { Props } from "./Types";

const SearchInput = ({ columnFilters, setColumnFilters }: Props) => {
  const productName =
    columnFilters.find((filter) => filter.id === "name")?.value || "";
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <InputGroup endElement={<IoIosSearch />} w="300px">
      <Input
        placeholder="Search"
        colorPalette="purple"
        value={productName}
        onChange={(e) => onFilterChange("name", e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;

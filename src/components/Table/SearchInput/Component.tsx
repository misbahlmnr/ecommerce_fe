import { Input, InputGroup } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { Props } from "./Types";
import { useEffect, useState } from "react";

const SearchInput = ({ columnFilters, setColumnFilters }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>(
    columnFilters.find((filter: any) => filter.id === "name")?.value || ""
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setColumnFilters((prev) =>
        prev
          .filter((f: any) => f.id !== "name")
          .concat({ id: "name", value: searchTerm })
      );
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, setColumnFilters]);

  return (
    <InputGroup endElement={<IoIosSearch />} w="300px">
      <Input
        placeholder="Search"
        colorPalette="purple"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;

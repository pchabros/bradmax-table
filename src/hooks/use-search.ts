import { useEffect, useState } from "react";
import { TableRecord, Search } from "../types";

interface UseSearchParams<T extends TableRecord> {
  data: T[];
  columns: string[];
}

function useSearch<T extends TableRecord>({
  data,
  columns,
}: UseSearchParams<T>) {
  const [searchedData, setSearchedData] = useState([{}]);
  const [search, setSearch] = useState<Search>({ columns, input: "" });
  const searchHandler = (input: string) => {
    setSearch((prev) => ({ ...prev, input }));
  };
  useEffect(() => {
    if (search.columns.length > 0 && search.input !== "") {
      const searchedData = data.filter((record) => {
        const inputsDetected = search.columns.map((column) => {
          return record[column].toString().includes(search.input);
        });
        return inputsDetected.some((inputDetected) => inputDetected);
      });
      setSearchedData(searchedData);
    } else {
      setSearchedData(data);
    }
  }, [data, search]);
  return {
    search,
    searchedData,
    searchHandler,
  };
}

export default useSearch;

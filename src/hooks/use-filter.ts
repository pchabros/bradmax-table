import { useEffect, useState } from "react";
import { TableRecord, Filter } from "../types";

interface UseFilterParams<T extends TableRecord> {
  data: T[];
}

function useFilter<T extends TableRecord>({ data }: UseFilterParams<T>) {
  const [filteredData, setFilteredData] = useState([{}]);
  const [filter, setFilter] = useState<Filter>({
    by: "",
    input: "",
  });
  const filterHandler = ({ by, input }: Filter) => {
    setFilter({ by, input });
  };
  useEffect(() => {
    if (filter.by && filter.input) {
      const filterBy = filter.by as keyof T;
      const filteredData = data.filter((d) => {
        const value = d[filterBy].toString();
        return value.includes(filter.input);
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [data, filter.by, filter.input]);
  return {
    filter,
    filteredData,
    filterHandler,
  };
}

export default useFilter;

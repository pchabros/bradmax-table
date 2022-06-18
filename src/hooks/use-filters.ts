import { useEffect, useState } from "react";
import { TableRecord, Filters } from "../types";

interface UseFiltersParams<T extends TableRecord> {
  data: T[];
}

function useFilters<T extends TableRecord>({ data }: UseFiltersParams<T>) {
  const [filteredData, setFilteredData] = useState([{}]);
  const [filters, setFilters] = useState<Filters>({});
  const filterHandler = ({ by, input }: Filters) => {
    setFilters((prev) => ({ ...prev, [by]: input }));
  };
  useEffect(() => {
    const filtersEntries = Object.entries(filters);
    if (filtersEntries.length > 0) {
      const filteredData = data.filter((record) => {
        const inputsDetected = filtersEntries.map(([filterBy, filterValue]) => {
          return record[filterBy].toString().includes(filterValue);
        });
        return inputsDetected.every((inputDetected) => inputDetected);
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [data, filters]);
  return {
    filters,
    filteredData,
    filterHandler,
  };
}

export default useFilters;

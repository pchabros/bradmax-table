import { useMemo, useState } from "react";
import { TableRecord, Sort } from "../types";

interface UseSortParams<T extends TableRecord> {
  data: T[];
}

function useSort<T extends TableRecord>({ data }: UseSortParams<T>) {
  const [sort, setSort] = useState<Sort>({
    by: "",
    descending: false,
  });
  const sortHandler = ({ by, descending }: Sort) => {
    setSort({ by, descending });
  };
  const sortedData = useMemo(() => {
    if (sort.by) {
      const sortBy = sort.by as keyof T;
      const compareFunction = sort.descending
        ? (a: T, b: T) => (a[sortBy] > b[sortBy] ? 1 : -1)
        : (a: T, b: T) => (a[sortBy] < b[sortBy] ? 1 : -1);
      return sort.by ? data.sort(compareFunction) : data;
    } else {
      return data;
    }
  }, [data, sort.by, sort.descending]);
  return {
    sort,
    sortedData,
    sortHandler,
  };
}

export default useSort;

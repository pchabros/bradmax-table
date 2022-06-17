import { useMemo, useState } from "react";
import { Sort } from "../types";

interface useSortParams<T> {
  data: T[];
}

function useSort<T>({ data }: useSortParams<T>) {
  const [sort, setSort] = useState<Sort>({
    by: "",
    descending: false,
  });
  const sortHandler = ({ by, descending }: Sort) => {
    setSort({ by, descending });
  };
  const sortedData = useMemo(() => {
    const sortBy = sort.by as keyof T;
    const compareFunction = sort.descending
      ? (a: T, b: T) => (a[sortBy] > b[sortBy] ? 1 : -1)
      : (a: T, b: T) => (a[sortBy] < b[sortBy] ? 1 : -1);
    return sort.by ? data.sort(compareFunction) : data;
  }, [data, sort]);
  return {
    sort,
    sortedData,
    sortHandler,
  };
}

export default useSort;

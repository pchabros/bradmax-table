import { useEffect, useState } from "react";
import { Sort } from "../types";

interface useSortParams<T> {
  data: T[];
}

function useSort<T>({ data }: useSortParams<T>) {
  const [sortedData, setSortedData] = useState([{}]);
  const [sort, setSort] = useState<Sort>({
    by: "",
    descending: false,
  });
  const sortHandler = ({ by, descending }: Sort) => {
    setSort({ by, descending });
  };
  useEffect(() => {
    const sortBy = sort.by as keyof T;
    const compareFunction = sort.descending
      ? (a: T, b: T) => (a[sortBy] > b[sortBy] ? 1 : -1)
      : (a: T, b: T) => (a[sortBy] < b[sortBy] ? 1 : -1);
    const sortedData = sort.by ? data.sort(compareFunction) : data;
    setSortedData(sortedData);
  }, [data, sort.by, sort.descending]);
  return {
    sort,
    sortedData,
    sortHandler,
  };
}

export default useSort;

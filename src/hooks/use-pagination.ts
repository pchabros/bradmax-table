import { useEffect, useState } from "react";

interface usePaginationParams<T> {
  data: T[];
  pageSize: number;
  dependencies?: any[];
}

function usePagination<T>({
  data,
  pageSize,
  dependencies = [],
}: usePaginationParams<T>) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageData, setPageData] = useState([{}]);
  useEffect(() => {
    setNumberOfPages(data.length / pageSize);
  }, [data, pageSize]);
  useEffect(() => {
    setPageData(
      data.slice((selectedPage - 1) * pageSize, selectedPage * pageSize)
    );
  }, [...dependencies, data, selectedPage, pageSize]);
  const pageChangeHandler = (direction: "prev" | "next") => {
    setSelectedPage((current: number) => {
      if (direction === "prev") return current - 1;
      else return current + 1;
    });
  };
  return {
    selectedPage,
    pageData,
    pageChangeHandler,
    numberOfPages,
  };
}

export default usePagination;

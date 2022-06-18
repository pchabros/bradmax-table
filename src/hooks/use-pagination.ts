import { useEffect, useState } from "react";

interface UsePaginationParams<T> {
  data: T[];
  pageSize: number;
  dependencies?: any[];
}

function usePagination<T>({
  data,
  pageSize,
  dependencies = [],
}: UsePaginationParams<T>) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageData, setPageData] = useState([{}]);
  useEffect(() => {
    const numberOfPages = Math.ceil(data.length / pageSize);
    setNumberOfPages(numberOfPages);
    if (selectedPage > numberOfPages)
      setSelectedPage(Math.max(numberOfPages, 1));
  }, [data, pageSize, selectedPage]);
  useEffect(() => {
    setPageData(
      data.slice((selectedPage - 1) * pageSize, selectedPage * pageSize)
    );
  }, [...dependencies, data, selectedPage, pageSize]);
  const pageChangeHandler = (direction: "prev" | "next") => {
    setSelectedPage((current: number) => {
      if (direction === "prev") return Math.max(current - 1, 1);
      else return Math.min(current + 1, numberOfPages);
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

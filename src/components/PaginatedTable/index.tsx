import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import TablePage from "./TablePage";
import useSort from "../../hooks/use-sort";

interface PaginatedTableProps<T> {
  data: T[];
  pageSize: number;
}

function PaginatedTable<T>({ data, pageSize }: PaginatedTableProps<T>) {
  const numberOfPages = data.length / pageSize;
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageData, setPageData] = useState([{}]);
  const { sort, sortedData, sortHandler } = useSort({ data });
  useEffect(() => {
    setPageData(
      sortedData.slice((selectedPage - 1) * pageSize, selectedPage * pageSize)
    );
  }, [sort, sortedData, selectedPage, pageSize]);
  const pageChangeHandler = (direction: "prev" | "next") => {
    setSelectedPage((current: number) => {
      if (direction === "prev") return current - 1;
      else return current + 1;
    });
  };
  return (
    <div>
      <TablePage pageData={pageData} onSort={sortHandler} />
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}

export default PaginatedTable;

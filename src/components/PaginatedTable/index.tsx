import { FC, useEffect, useState } from "react";
import Pagination from "./Pagination";
import Table from "./Table";

interface PaginatedTableProps {
  data: object[];
  pageSize: number;
}

const PaginatedTable: FC<PaginatedTableProps> = ({ data, pageSize }) => {
  const numberOfPages = data.length / pageSize;
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageData, setPageData] = useState([{}]);
  useEffect(() => {
    setPageData(
      data.slice((selectedPage - 1) * pageSize, selectedPage * pageSize)
    );
  }, [data, selectedPage, pageSize]);
  const pageChangeHandler = (direction: "prev" | "next") => {
    setSelectedPage((current: number) => {
      if (direction === "prev") return current - 1;
      else return current + 1;
    });
  };
  return (
    <div>
      <Table data={pageData} />
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default PaginatedTable;

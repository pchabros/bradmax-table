import Pagination from "./Pagination";
import TablePage from "./TablePage";
import useSort from "../../hooks/use-sort";
import usePagination from "../../hooks/use-pagination";

interface PaginatedTableProps<T> {
  data: T[];
  pageSize: number;
}

function PaginatedTable<T>({ data, pageSize }: PaginatedTableProps<T>) {
  const { sort, sortedData, sortHandler } = useSort({ data });
  const { selectedPage, pageData, pageChangeHandler, numberOfPages } =
    usePagination({ data: sortedData, pageSize, dependencies: [sort] });
  return (
    <div>
      <TablePage pageData={pageData} sort={sort} onSort={sortHandler} />
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}

export default PaginatedTable;

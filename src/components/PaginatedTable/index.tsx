import Pagination from "./Pagination";
import TablePage from "./TablePage";
import useSort from "../../hooks/use-sort";
import usePagination from "../../hooks/use-pagination";
import useFilter from "../../hooks/use-filter";
import { TableRecord } from "../../types";

interface PaginatedTableProps<T extends TableRecord> {
  data: T[];
  pageSize: number;
}

function PaginatedTable<T extends TableRecord>({
  data,
  pageSize,
}: PaginatedTableProps<T>) {
  const { sort, sortedData, sortHandler } = useSort({ data });
  const { filter, filteredData, filterHandler } = useFilter({
    data: sortedData,
  });
  const { selectedPage, pageData, pageChangeHandler, numberOfPages } =
    usePagination({ data: filteredData, pageSize, dependencies: [sort] });
  return (
    <div>
      <TablePage
        pageData={pageData}
        sort={sort}
        onSort={sortHandler}
        filter={filter}
        onFilter={filterHandler}
      />
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}

export default PaginatedTable;

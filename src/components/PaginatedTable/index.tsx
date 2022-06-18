import Pagination from "./Pagination";
import TablePage from "./TablePage";
import useSort from "../../hooks/use-sort";
import usePagination from "../../hooks/use-pagination";
import useFilters from "../../hooks/use-filters";
import { TableRecord } from "../../types";

interface PaginatedTableProps<T extends TableRecord> {
  data: T[];
  pageSize: number;
}

function PaginatedTable<T extends TableRecord>({
  data,
  pageSize,
}: PaginatedTableProps<T>) {
  const { filters, filteredData, filterHandler } = useFilters({
    data,
  });
  const { sort, sortedData, sortHandler } = useSort({ data: filteredData });
  const { selectedPage, pageData, pageChangeHandler, numberOfPages } =
    usePagination({ data: sortedData, pageSize, dependencies: [sort] });
  return (
    <div>
      <TablePage
        pageData={pageData}
        sort={sort}
        onSort={sortHandler}
        filter={filters}
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

import Pagination from "./Pagination";
import TablePage from "./TablePage";
import SearchInput from "./SearchInput";
import useSort from "../../hooks/use-sort";
import usePagination from "../../hooks/use-pagination";
import useFilters from "../../hooks/use-filters";
import { TableRecord } from "../../types";
import useSearch from "../../hooks/use-search";

interface PaginatedTableProps<T extends TableRecord> {
  data: T[];
  pageSize: number;
}

function PaginatedTable<T extends TableRecord>({
  data,
  pageSize,
}: PaginatedTableProps<T>) {
  const { searchedData, searchHandler } = useSearch({
    data,
    columns: ["name", "company", "email"],
  });
  const { filters, filteredData, filterHandler } = useFilters({
    data: searchedData,
  });
  const { sort, sortedData, sortHandler } = useSort({ data: filteredData });
  const { selectedPage, pageData, pageChangeHandler, numberOfPages } =
    usePagination({ data: sortedData, pageSize, dependencies: [sort] });
  return (
    <div>
      <SearchInput onSearch={searchHandler} />
      <TablePage
        pageData={pageData}
        filter={filters}
        onFilter={filterHandler}
        sort={sort}
        onSort={sortHandler}
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

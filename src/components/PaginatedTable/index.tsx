import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import TableHeader from "./TableHeader";
import TablePage from "./TablePage/";
import useFilters from "../../hooks/use-filters";
import usePagination from "../../hooks/use-pagination";
import useSearch from "../../hooks/use-search";
import useSort from "../../hooks/use-sort";
import { TableRecord } from "../../types";

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
  const { filters, filteredData, filtersHandler } = useFilters({
    data: searchedData,
  });
  const { sort, sortedData, sortHandler } = useSort({ data: filteredData });
  const { selectedPage, pageData, pageChangeHandler, numberOfPages } =
    usePagination({ data: sortedData, pageSize, dependencies: [sort] });
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    if (pageData[0]) setColumns(Object.keys(pageData[0]));
  }, [pageData]);
  return (
    <div>
      <SearchInput onSearch={searchHandler} />
      <table>
        <TableHeader
          columns={columns}
          sort={sort}
          onSort={sortHandler}
          filter={filters}
          onFilter={filtersHandler}
        />
        <TablePage pageData={pageData} />
      </table>
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}

export default PaginatedTable;

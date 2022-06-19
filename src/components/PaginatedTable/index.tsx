import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TablePage from "./TablePage/";
import useFilters from "../../hooks/use-filters";
import usePagination from "../../hooks/use-pagination";
import useSearch from "../../hooks/use-search";
import useSort from "../../hooks/use-sort";
import { TableRecord } from "../../types";
import styles from "./paginated-table.module.scss";

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
  return (
    <div className={styles.paginatedTable}>
      <SearchInput onSearch={searchHandler} />
      <Table
        columns={[
          "age",
          "name",
          "gender",
          "company",
          "email",
          "phone",
          "registered",
          "tags",
        ]}
      >
        <TableHeader
          sort={sort}
          onSort={sortHandler}
          onFilter={filtersHandler}
        />
        <TablePage pageData={pageData} />
      </Table>
      <Pagination
        selectedPage={selectedPage}
        onPageChange={pageChangeHandler}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}

export default PaginatedTable;

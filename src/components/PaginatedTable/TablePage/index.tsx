import { FC, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { Filterable, Sortable } from "../../../types";

interface TablePageProps extends Filterable, Sortable {
  pageData: object[];
}

const TablePage: FC<TablePageProps> = ({
  pageData,
  sort,
  onSort,
  filter,
  onFilter,
}) => {
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    if (pageData[0]) setColumns(Object.keys(pageData[0]));
  }, [pageData]);

  return (
    <table>
      <TableHeader
        columns={columns}
        sort={sort}
        onSort={onSort}
        filter={filter}
        onFilter={onFilter}
      />
      <TableBody pageData={pageData} />
    </table>
  );
};

export default TablePage;

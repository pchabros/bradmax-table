import { FC } from "react";
import TableHeaderCell from "./TableHeaderCell";
import { Filterable, Sortable } from "../../../types";

interface TableHeaderProps extends Filterable, Sortable {
  columns?: string[];
}

const TableHeader: FC<TableHeaderProps> = ({
  columns = [],
  sort,
  onSort,
  onFilter,
}) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TableHeaderCell
            key={column}
            name={column}
            sort={sort}
            onSort={onSort}
            onFilter={onFilter}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

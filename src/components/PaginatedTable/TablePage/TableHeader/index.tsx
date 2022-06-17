import { FC } from "react";
import TableHeaderCell from "./TableHeaderCell";
import { Sort } from "../../../../types";

interface TableHeaderProps {
  columns: string[];
  sort: Sort;
  onSort: (sort: Sort) => void;
}

const TableHeader: FC<TableHeaderProps> = ({ columns, sort, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TableHeaderCell
            key={column}
            name={column}
            sort={sort}
            onSort={onSort}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

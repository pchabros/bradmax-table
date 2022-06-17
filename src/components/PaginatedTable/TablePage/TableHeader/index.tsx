import { FC } from "react";
import TableHeaderCell from "./TableHeaderCell";
import { Sort } from "../../../../types";

interface TableHeaderProps {
  columns: string[];
  onSort: (sort: Sort) => void;
}

const TableHeader: FC<TableHeaderProps> = ({ columns, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TableHeaderCell key={column} name={column} onSort={onSort} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

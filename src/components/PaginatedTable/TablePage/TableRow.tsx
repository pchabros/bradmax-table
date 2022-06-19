import { FC } from "react";
import TableCell from "./TableCell";
import { Filters, TableRecord } from "../../../types";

interface TableRowProps {
  rowData: TableRecord;
  filters: Filters;
  columns: string[];
}

const TableRow: FC<TableRowProps> = ({ rowData, columns, filters }) => {
  const rowGuid = rowData.guid;
  return (
    <tr>
      {Object.entries(rowData).map(([column, value]) => {
        if (columns.includes(column)) {
          const filter = filters[column];
          return (
            <TableCell
              key={`${rowGuid}-${column}`}
              value={value}
              filter={filter}
            />
          );
        }
      })}
    </tr>
  );
};

export default TableRow;

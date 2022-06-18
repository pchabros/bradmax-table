import { FC } from "react";
import { TableRecord } from "../../../types";

interface TableRowProps {
  rowData: TableRecord;
  columns: string[];
}

const TableRow: FC<TableRowProps> = ({ rowData, columns }) => {
  const rowGuid = rowData.guid;
  return (
    <tr>
      {Object.entries(rowData).map(([column, value]) => {
        if (columns.includes(column)) {
          return <td key={`${rowGuid}-${column}`}>{value}</td>;
        }
      })}
    </tr>
  );
};

export default TableRow;

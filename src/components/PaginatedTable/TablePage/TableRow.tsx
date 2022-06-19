import { FC } from "react";
import { TableRecord } from "../../../types";
import styles from "./table-row.module.scss";

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
          return (
            <td key={`${rowGuid}-${column}`}>
              {Array.isArray(value)
                ? value.map((v) => <span className={styles.pill}>{v}</span>)
                : value}
            </td>
          );
        }
      })}
    </tr>
  );
};

export default TableRow;

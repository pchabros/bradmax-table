import { FC } from "react";

interface TableRowProps {
  rowData: object;
}

const TableRow: FC<TableRowProps> = ({ rowData }) => {
  return (
    <tr>
      {Object.values(rowData).map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;

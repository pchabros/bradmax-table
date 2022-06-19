import { FC } from "react";
import SpanUnderline from "./SpanUnderline";
import { CellValue } from "../../../types";

interface TableCellProps {
  value: CellValue;
  filter?: string;
}

const TableCell: FC<TableCellProps> = ({ value, filter }) => {
  if (Array.isArray(value)) {
    return (
      <td>
        {value.map((value, i) => (
          <SpanUnderline key={`${value}${i}`} value={value} filter={filter} />
        ))}
      </td>
    );
  } else {
    return (
      <td>
        <SpanUnderline value={value.toString()} filter={filter} />
      </td>
    );
  }
};

export default TableCell;

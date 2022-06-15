import { FC } from "react";
import TableRow from "./TableRow";

interface TableBodyProps {
  data: object[];
}

const TableBody: FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((rowData, i) => (
        <TableRow key={i} rowData={rowData} />
      ))}
    </tbody>
  );
};

export default TableBody;

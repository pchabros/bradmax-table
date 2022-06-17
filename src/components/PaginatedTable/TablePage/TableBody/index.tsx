import { FC } from "react";
import TableRow from "./TableRow";

interface TableBodyProps {
  pageData: object[];
}

const TableBody: FC<TableBodyProps> = ({ pageData }) => {
  return (
    <tbody>
      {pageData.map((rowData, i) => (
        <TableRow key={i} rowData={rowData} />
      ))}
    </tbody>
  );
};

export default TableBody;

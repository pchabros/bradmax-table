import { FC } from "react";
import TableRow from "./TableRow";

interface TablePageProps {
  pageData: object[];
}

const TablePage: FC<TablePageProps> = ({ pageData }) => {
  return (
    <tbody>
      {pageData.map((rowData, i) => (
        <TableRow key={i} rowData={rowData} />
      ))}
    </tbody>
  );
};

export default TablePage;

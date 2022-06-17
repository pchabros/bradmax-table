import { FC, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { Sort } from "../../../types";

interface TablePageProps {
  pageData: object[];
  onSort: (sort: Sort) => void;
}

const TablePage: FC<TablePageProps> = ({ pageData, onSort }) => {
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    if (pageData[0]) setColumns(Object.keys(pageData[0]));
  }, [pageData]);

  return (
    <table>
      <TableHeader columns={columns} onSort={onSort} />
      <TableBody pageData={pageData} />
    </table>
  );
};

export default TablePage;

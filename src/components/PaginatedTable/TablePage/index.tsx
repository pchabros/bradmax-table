import { FC } from "react";
import TableRow from "./TableRow";
import { TableRecord } from "../../../types";

interface TablePageProps {
  pageData: TableRecord[];
  columns?: string[];
}

const TablePage: FC<TablePageProps> = ({ pageData, columns = [] }) => {
  return (
    <tbody>
      {pageData.map((rowData) => {
        if (Object.values(rowData).length > 0) {
          return (
            <TableRow
              key={rowData.guid as string}
              rowData={rowData}
              columns={columns}
            />
          );
        }
      })}
    </tbody>
  );
};

export default TablePage;

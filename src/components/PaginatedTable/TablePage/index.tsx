import { FC } from "react";
import TableRow from "./TableRow";
import { Filters, TableRecord } from "../../../types";

interface TablePageProps {
  pageData: TableRecord[];
  filters: Filters;
  columns?: string[];
}

const TablePage: FC<TablePageProps> = ({ pageData, filters, columns = [] }) => {
  return (
    <tbody>
      {pageData.map((rowData) => {
        if (Object.values(rowData).length > 0) {
          return (
            <TableRow
              key={rowData.guid as string}
              rowData={rowData}
              filters={filters}
              columns={columns}
            />
          );
        }
      })}
    </tbody>
  );
};

export default TablePage;

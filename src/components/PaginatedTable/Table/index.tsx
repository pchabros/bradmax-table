import { FC, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
  data: object[];
}

const Table: FC<TableProps> = ({ data }) => {
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    if (data[0]) setColumns(Object.keys(data[0]));
  }, [data]);

  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;

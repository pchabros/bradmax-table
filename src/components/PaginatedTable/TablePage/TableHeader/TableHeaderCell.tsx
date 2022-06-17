import { FC } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { Sort } from "../../../../types";

interface TableHeaderCellProps {
  name: string;
  onSort: (sort: Sort) => void;
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({ name, onSort }) => {
  return (
    <th>
      <span>{name}</span>
      <div>
        <FaSortUp onClick={onSort.bind(null, { by: name, descending: true })} />
        <FaSortDown
          onClick={onSort.bind(null, { by: name, descending: false })}
        />
      </div>
    </th>
  );
};

export default TableHeaderCell;

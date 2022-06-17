import { FC } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Sort } from "../../../../types";
import styles from "./table-header-cell.module.scss";

interface TableHeaderCellProps {
  name: string;
  sort: Sort;
  onSort: (sort: Sort) => void;
}

const setIconClass = (name: string, descending: boolean, sort: Sort) => {
  return name === sort.by && descending === sort.descending
    ? `${styles.sortIcon} ${styles.sortIconActive}`
    : styles.sortIcon;
};

const TableHeaderCell: FC<TableHeaderCellProps> = ({ name, sort, onSort }) => {
  return (
    <th>
      <div className={styles.headerCell}>
        <span>{name}</span>
        <div className={styles.sortIconsContainer}>
          <FiChevronUp
            className={setIconClass(name, true, sort)}
            onClick={onSort.bind(null, { by: name, descending: true })}
          />
          <FiChevronDown
            className={setIconClass(name, false, sort)}
            onClick={onSort.bind(null, { by: name, descending: false })}
          />
        </div>
      </div>
    </th>
  );
};

export default TableHeaderCell;

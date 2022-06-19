import { FC, useRef } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Filterable, Sort, Sortable } from "../../../types";
import styles from "./table-header-cell.module.scss";

interface TableHeaderCellProps extends Filterable, Sortable {
  name: string;
  sort: Sort;
  onSort: (sort: Sort) => void;
}

const setIconClass = (name: string, descending: boolean, sort: Sort) => {
  return name === sort.by && descending === sort.descending
    ? `${styles.sortIcon} ${styles.sortIconActive}`
    : styles.sortIcon;
};

const TableHeaderCell: FC<TableHeaderCellProps> = ({
  name,
  sort,
  onSort,
  onFilter,
}) => {
  const filterRef = useRef<HTMLInputElement>(null);
  return (
    <th>
      <div className={styles.headerCell}>
        <div className={styles.headerCellLabel}>
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
        <input
          ref={filterRef}
          type="text"
          spellCheck={false}
          onChange={() =>
            onFilter({ by: name, input: filterRef.current!.value })
          }
        />
      </div>
    </th>
  );
};

export default TableHeaderCell;

import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
} from "react";
import styles from "./table.module.scss";

interface TableProps {
  columns: string[];
}

const Table: FC<PropsWithChildren<TableProps>> = ({ columns, children }) => {
  return (
    <table className={styles.table}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { columns });
        }
      })}
    </table>
  );
};

export default Table;

import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
} from "react";

interface TableProps {
  columns: string[];
}

const Table: FC<PropsWithChildren<TableProps>> = ({ columns, children }) => {
  return (
    <table>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { columns });
        }
      })}
    </table>
  );
};

export default Table;

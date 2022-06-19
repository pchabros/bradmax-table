import { FC } from "react";
import styles from "./table-row.module.scss";

interface SpanUnderlineProps {
  value: string;
  filter?: string;
}

const SpanUnderline: FC<SpanUnderlineProps> = ({ value, filter }) => {
  let content;
  if (filter && value.includes(filter)) {
    const [prefix, suffix] = value.toString().split(filter);
    content = (
      <span className={styles.pill}>
        <span>{prefix}</span>
        <span className={styles.filtered}>{filter}</span>
        <span>{suffix}</span>
      </span>
    );
  } else {
    content = value;
  }
  return <span className={styles.pill}>{content}</span>;
};

export default SpanUnderline;

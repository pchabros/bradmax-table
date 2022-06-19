import { FC } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./pagination.module.scss";

interface PaginationProps {
  selectedPage: number;
  onPageChange: (direction: "prev" | "next") => void;
  numberOfPages: number;
}

const Pagination: FC<PaginationProps> = ({
  selectedPage,
  onPageChange,
  numberOfPages,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={onPageChange.bind(null, "prev")}
        disabled={selectedPage === 1}
      >
        <FiChevronLeft />
      </button>
      <span>{selectedPage}</span>
      <button
        onClick={onPageChange.bind(null, "next")}
        disabled={selectedPage === numberOfPages}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;

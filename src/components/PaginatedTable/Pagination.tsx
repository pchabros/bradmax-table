import { FC } from "react";

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
    <div>
      <button
        onClick={onPageChange.bind(null, "prev")}
        disabled={selectedPage === 1}
      >
        Prev
      </button>
      <span>{selectedPage}</span>
      <button
        onClick={onPageChange.bind(null, "next")}
        disabled={selectedPage === numberOfPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

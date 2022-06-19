import { FC, useRef } from "react";
import styles from "./search-input.module.scss";

interface SearchInputProps {
  onSearch: (input: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.searchInput}>
      <span>search:</span>
      <input
        id="search"
        ref={searchRef}
        type="text"
        spellCheck={false}
        onChange={() => onSearch(searchRef.current!.value)}
      />
    </div>
  );
};

export default SearchInput;

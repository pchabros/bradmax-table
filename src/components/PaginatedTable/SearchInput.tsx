import { FC, useRef } from "react";

interface SearchInputProps {
  onSearch: (input: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        onChange={() => onSearch(searchRef.current!.value)}
      />
    </div>
  );
};

export default SearchInput;

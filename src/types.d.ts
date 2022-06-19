type CellValue = number | string | string[];
type TableRecord = Record<string, CellValue>;
type Employee = {
  index: number;
  guid: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  registered: string;
  tags: string[];
};
type Filters = Record<string, string>;
type Search = {
  columns: string[];
  input: string;
};
type Sort = {
  by: string;
  descending: boolean;
};
interface Filterable {
  onFilter: (filter: Filter) => void;
}
interface Sortable {
  sort: Sort;
  onSort: (sort: Sort) => void;
}

export {
  CellValue,
  TableRecord,
  Employee,
  Filters,
  Sort,
  Search,
  Filterable,
  Sortable,
};

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
type Sort = {
  by: string;
  descending: boolean;
};

export { Employee, Sort };

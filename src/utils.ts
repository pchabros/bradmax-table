import { Employee } from "./types";

const dateToUTC = (date: string) => {
  return new Date(date.replace(" ", ".000"))
    .toISOString()
    .replace("T", " ")
    .replace(".000Z", "");
};
const preprocessEmployeeData = (data: Employee[]) => {
  return data.map((row) => {
    row.registered = dateToUTC(row.registered);
    return row;
  });
};

export { preprocessEmployeeData };

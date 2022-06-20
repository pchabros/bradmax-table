import PaginatedTable from "./components/PaginatedTable";
import data from "./data.json";
import { preprocessEmployeeData } from "./utils";
import { Employee } from "./types";

const employeeData = preprocessEmployeeData(data as Employee[]);

function App() {
  return (
    <div className="App">
      <PaginatedTable data={employeeData} pageSize={10} />
    </div>
  );
}

export default App;

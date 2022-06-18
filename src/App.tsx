import PaginatedTable from "./components/PaginatedTable";
import data from "./data.json";
import { Employee } from "./types";

const employeeData = data as Employee[];

function App() {
  return (
    <div className="App">
      <PaginatedTable data={employeeData} pageSize={10} />
    </div>
  );
}

export default App;

import PaginatedTable from "./components/PaginatedTable";
import data from "./data.json";
import { Employee } from "./types";

const dataSample = data as Employee[];

function App() {
  return (
    <div className="App">
      <PaginatedTable data={dataSample} pageSize={10} />
    </div>
  );
}

export default App;

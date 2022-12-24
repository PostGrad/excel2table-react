import { Route, Routes } from "react-router-dom";
import UploadPanel from "./components/UploadPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UploadPanel />}></Route>
      </Routes>
    </div>
  );
}

export default App;

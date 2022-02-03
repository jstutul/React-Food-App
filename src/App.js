import "./App.css";
import Restuarent from "./Component/Restuarent/Restuarent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleFood from "./Component/SingleFood/SingleFood";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/food/:id" element={<SingleFood />}></Route>
          <Route exact path="/" element={<Restuarent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

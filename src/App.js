import "./App.css";
import Box from "./boxes/box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/box" element={<Box />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

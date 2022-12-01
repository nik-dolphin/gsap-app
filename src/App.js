import "./App.css";
import Box from "./boxes/box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Scroll from "./scroll/scroll";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/box" element={<Box />} />
        <Route exact path="/scroll" element={<Scroll />} />
      </Routes>
    </Router>
  );
}

export default App;

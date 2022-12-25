import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Careers from "./Pages/Careers";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

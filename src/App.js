import Home from "./pages/Home";
import "./App.css";
import Search from "./pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Search />} path="search/:genre" />
      </Routes>
    </Router>
  );
}

export default App;

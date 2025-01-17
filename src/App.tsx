import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Game from "./pages/game";
import Contact from "./pages/connect";
import Link from "./components/Link";
import Button from "./components/Button";
import Nav from "./components/Nav";
import "./pixels.css";
//import Cursor from "./components/Cursor"

const App = () => {
  return (
    <div className={"pixels"}>
    <div className={"falling-pixels"}></div>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/connect" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App
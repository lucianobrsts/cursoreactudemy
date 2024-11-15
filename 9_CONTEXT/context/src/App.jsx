import "./App.css";
import Home from './pages/Home'
import Company from './pages/Company'
import About from './pages/About'

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>React Context</h1>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

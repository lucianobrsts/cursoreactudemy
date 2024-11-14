import "./App.css";

import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2- links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

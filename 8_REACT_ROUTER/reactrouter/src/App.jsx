import "./App.css";

import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

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
          {/* 4- Rodas dinâmicas */}
          <Route path="/products/:id" element={<Product />} />
          
          {/* 6- Nested routes */}
          <Route path="/products/:id/info" element={<Info />} />

          {/* 7- No match routes */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

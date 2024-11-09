import { useState } from "react";

import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 15;
  const [name] = useState("Luciano Brito");

  return (
    <div className="root">
      {/* CSS Global */}
      <h1>CSS com React</h1>

      {/* CSS de Component */}
      <MyComponent />
      <p>Este parágrafo é do app.jsx</p>

      {/* CSS inline */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "2px solid gold" }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinâmico
      </h2>

      <h2
        style={
          name === "Luciano Brito"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
    </div>
  );
}

export default App;

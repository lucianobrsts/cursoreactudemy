import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="root">
      {/* CSS Global */}
      <h1>CSS com React</h1>

      {/* CSS de Component */}
      <MyComponent />
      <p>Este parágrafo é do app.jsx</p>

      {/* CSS de Component */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid gold" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;

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
    </div>
  );
}

export default App;

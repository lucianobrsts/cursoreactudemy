import { useState } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="titulo">Forms</h2>
      <MyForm
        user={{
          name: "Luciano",
          email: "lucianobrsts@lulu.com.br",
          bio: "Eu sou um advogado",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import City from './assets/city.jpg'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Avançando em React</h1>
      <h2>Uso de imagens</h2>

      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Paisagem" />

      {/* Imagem em asset*/}
      <img src={City} alt="City" />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ManagerData from "./components/ManagerData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CardDetail from "./components/CardDetail";

function App() {
  const [count, setCount] = useState(0);
  const name = "Luciano";
  const [userName] = useState("Maria");

  return (
    <div>
      <h1>Avançando em React</h1>
      <h2>Uso de imagens</h2>

      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Paisagem" />

      {/* Imagem em asset*/}
      <img src={City} alt="City" />

      <ManagerData />
      <ListRender />
      <ConditionalRender />

      { /* props */ }
      <ShowUserName name={userName} />

      { /* destructuring */ }
      <CardDetail brand="Wv" km={100000} color="Azul" newCar={false} />

      {/* Reaproveitando components */}
      <CardDetail brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CardDetail brand="Fiat" color="Branco" km={4500} newCar={false} />
    </div>
  );
}

export default App;

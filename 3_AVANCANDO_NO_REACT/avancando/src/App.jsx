import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ManagerData from "./components/ManagerData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CardDetail from "./components/CardDetail";
import Fragments from "./components/Fragments";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);
  //const name = "Luciano";
  const [userName] = useState("Maria");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

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

      {/* props */}
      <ShowUserName name={userName} />

      {/* destructuring */}
      <CardDetail brand="Wv" km={100000} color="Azul" newCar={false} />

      {/* Reaproveitando components */}
      <CardDetail brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CardDetail brand="Fiat" color="Branco" km={4500} newCar={false} />

      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CardDetail key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragments propsFragment="Teste" />

      {/* Children */}
      <Container myValue="Testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2">
        <p>Testando o conteiner</p>
      </Container>
    </div>
  );
}

export default App;

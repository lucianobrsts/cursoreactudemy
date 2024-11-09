import "./App.css";
import CarDetail from "./components/CarDetail";

function App() {
  const cars = [
    { id: 1, brand: "Fiat", color: "Cinza Urano", km: 18000, model: "Argo" },
    { id: 2, brand: "Chevrolet", color: "Branco", km: 50000, model: "Tracker" },
    { id: 3, brand: "Renault", color: "Verde", km: 23000, model: "Duster" },
    { id: 4, brand: "Toyota", color: "Vermelho", km: 1200, model: "SW4" }
  ];

  return (
    <div>
      <h2>Detalhe dos Carros</h2>
      {cars.map((car) => (
        <CarDetail
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          model={car.model}
        />
        
      ))}
    </div>
  );
}

export default App;

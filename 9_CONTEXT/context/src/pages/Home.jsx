import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Valor do contador: {counter}</p>

      {/* Alterando valor do contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;

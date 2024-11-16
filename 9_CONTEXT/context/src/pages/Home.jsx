// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4- Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5- context mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const {counter} = useCounterContext();

  // 5- context mais complexto
  const {color} = useTitleColorContext();

  console.log(color)

  return (
    <div>
      <h2 style={{color: color}}>Home</h2>
      <p>Valor do contador: {counter}</p>

      {/* 3- Alterando valor do contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;

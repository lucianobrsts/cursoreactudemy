// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Company = () => {
  // const {counter} = useContext(CounterContext);

  const { counter } = useCounterContext();

  // 5- context mais complexo
  const { color, dispatch } = useTitleColorContext();

  return (
    <div>
      <h2 style={{ color: color }}>Company</h2>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Company;

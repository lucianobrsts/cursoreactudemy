// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
    // const {counter} = useContext(CounterContext);

    const {counter} = useCounterContext();
    
  return (
    <div>
      <h2>About</h2>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;

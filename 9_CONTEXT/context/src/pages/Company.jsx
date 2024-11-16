// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext";

const Company = () => {
    // const {counter} = useContext(CounterContext);

    const { counter } = useCounterContext();

    return (
        <div>
            <h2>Company</h2>
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export default Company
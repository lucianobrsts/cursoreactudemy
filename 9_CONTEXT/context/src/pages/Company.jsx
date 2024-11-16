import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Company = () => {
    const {counter} = useContext(CounterContext);

    return (
        <div>
            <h2>Company</h2>
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export default Company
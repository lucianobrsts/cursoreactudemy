import { useState } from "react";

const ManagerData = ()  => {
    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(15);
    
    console.log(number)

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
            
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    )
}

export default ManagerData
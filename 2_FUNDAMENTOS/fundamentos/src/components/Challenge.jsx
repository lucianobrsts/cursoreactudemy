
const Challenge = () => {
    const valor1 = 10;
    const valor2 = 20;

    const soma = () => {
        console.log(valor1 + valor2)
    }

    return (
        <div>
            <p>Valor1: {valor1}</p>
            <p>valor2: {valor2}</p>

            <button onClick={soma}>Clique para somar!</button>
        </div>
    )
}

export default Challenge
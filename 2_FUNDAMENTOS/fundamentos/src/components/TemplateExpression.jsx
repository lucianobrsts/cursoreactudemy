
const TemplateExpression = () => {
    const name = "Luciano Brito"
    const data = {
        age: 49,
        job: "Programmer",
    };

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como {data.job}</p>
            <p>Somatorio é igual a: {4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpression
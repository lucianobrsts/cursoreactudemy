
const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        
        console.log("Você ativou o evento!")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h2>Renderizando isso!</h2>
        } else {
            return <h2>Também posso renderizar isso!</h2>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            
            {/*Modelo de botão que não deve ser usado!*/}
            <div>
                <button onClick={() =>{
                    if(true) {
                        console.log("Isso não deveria existir =)");
                    }
                }}
                >Clique aqui, por favor!
                </button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events
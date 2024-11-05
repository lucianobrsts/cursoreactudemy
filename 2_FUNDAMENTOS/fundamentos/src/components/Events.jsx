
const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        
        console.log("Você ativou o evento!")
    }

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
        </div>
    )
}

export default Events
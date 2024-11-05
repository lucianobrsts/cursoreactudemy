
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
        </div>
    )
}

export default Events
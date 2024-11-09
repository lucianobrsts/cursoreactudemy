import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    return (
        <div>
            <h2>Isso será exibido!</h2>
            {x && <p>Se x for true, Sim!</p>}
            {!x && <p>Agora x é falso!</p>}
        </div>
    )
}

export default ConditionalRender
import MyComponent from "./MyComponent"
// arquivo de estilo

const FirstComponent = () => {
// essa função faz isso

/*
Comentário de 
multiplas 
linhas
*/

    return (
        <div>
            {/* Algum comentário */}
            <h2>Meu primeiro componente</h2>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent
const UserDetail = ({name, age, ocupation, ofLegalAge}) => {
    return (
        <div>
            <h2>Detalhes de Pessoas:</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Proffisão: {ocupation}</li>
                {!ofLegalAge && <p>Não pode ser habilitado!</p>}
            </ul>
        </div>
    )
}

export default UserDetail
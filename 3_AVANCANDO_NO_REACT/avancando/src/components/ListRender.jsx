import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Luciano", "Matheus", "Josias", "Pedro"]);

    const [users, setUsers] =useState([
        {id: 1, name: "Luciano", age: 49},
        {id: 2, name: "Matheus", age: 31},
        {id: 3, name: "Josias", age: 28},
        {id: 4, name: "Pedro", age: 44}
    ]);

    const deleteRandam = () => {
        const randamNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randamNumber !== user.id);
        });
    };

    return (
    <div>
        { /*Render sem key primeiramente*/ }
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandam}>Delete random user</button>
    </div>
    );
}

export default ListRender
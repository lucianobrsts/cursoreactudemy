import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Luciano", "Matheus", "Josias", "Pedro"])

    const [users] =useState([
        {id: 1, name: "Luciano", age: 49},
        {id: 65345, name: "Matheus", age: 31},
        {id: 4544544, name: "Josias", age: 28},
        {id: 1414, name: "Pedro", age: 44}
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender
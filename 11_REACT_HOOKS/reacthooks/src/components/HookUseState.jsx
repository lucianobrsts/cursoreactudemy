import { useState } from "react";

const HookUseState = () => {
  // 1- useState
  let userName = "João";

  const [name, setName] = useState("Luciano");

  const changeNames = () => {
    userName = "João Souza";
    setName("Luciano Brito");

    console.log(userName);
  };
  console.log(name);

  // 2- useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio a uma api
    console.log(age);
  };

  return (
    <div>
      {/* 1- useState */}
      <p>Variável: {userName}</p>
      <p>userState: {name}</p>

      <button onClick={changeNames}>Mudar nomes</button>
      <hr />

      {/* 1- useState */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;

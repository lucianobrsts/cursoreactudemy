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

  return (
    <div>
      {/* 1- useState */}
      <p>Variável: {userName}</p>
      <p>userState: {name}</p>

      <button onClick={changeNames}>Mudar nomes</button>

      <hr />
    </div>
  );
};

export default HookUseState;

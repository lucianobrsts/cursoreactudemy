import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Luciano");

  return (
    <div>
      <h2>Isso será exibido!</h2>
      {x && <p>Se x for true, Sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h2>If Ternário</h2>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clique Aqui!</button>
    </div>
  );
};

export default ConditionalRender;

import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3- Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleNome = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email)
  return (
    <div>
      {/* 1 - criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleNome}
          />
        </div>
        
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite os eu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

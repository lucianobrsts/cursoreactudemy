import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  //Controlled inputs

  // 3- Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleNome = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário!");
    console.log(name, email);
  };

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleNome}
            value={name}
          />
        </div>

        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="text"
            name="email"
            placeholder="Digite os eu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

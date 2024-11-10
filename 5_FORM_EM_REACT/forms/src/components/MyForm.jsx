import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  //Controlled inputs

  // 3- Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleNome = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário!");
    console.log(name, email, bio, role);

    // validação
    // envio

    // 7- Limpar form
    setName("");
    setEmail("");
    setBio("");
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

        {/* 8 - textarea */}
        <label>
          <span>Texto:</span>
          <textarea
            name=""
            placeholder="Ddescrição do usuário"
            cols={50}
            rows={10}
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
            <span>Função no sistema:</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option>Selecione:</option>
                <option value="user">Usuário</option>
                <option value="editar">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Evento {name}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do evento"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error">Nome é obrigatório</span>

        <input type="date" placeholder="Nome do evento" lang="pt-BR" />

        <select defaultValue="">
          <option value="" disabled>
            Selecione...
          </option>

          <option value="technology">React</option>
          <option value="entertainment">Node.js</option>
          <option value="business">Javascript</option>
          <option value="business">Typescript</option>
        </select>

        <textarea placeholder="Descrição" rows={4} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

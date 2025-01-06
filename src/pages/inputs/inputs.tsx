import Topo from "@/components/Topo";
import { useState } from "react";

export default function inputs() {
  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("");

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label htmlFor="name">nome</label>
        <input
          type="text"
          name="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="campoForm">
        <label htmlFor="name">Linguagem</label>
        <select
          value={linguagem}
          onChange={(e) => setLinguagem(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
        </select>
      </div>
      <div>Nome: {nome}</div>
      <div>Linguagem: {linguagem}</div>
    </div>
  );
}

import Topo from "@/components/Topo";
import { useState } from "react";

export default function inputs() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label htmlFor="name">nome</label>
        <input type="text" name="name" value={nome} onChange={(e)=>setNome(e.target.value)}/>
      </div>
      <div className="campoForm">
        <label htmlFor="name">idade</label>
        <input type="number" name="name" value={idade} onChange={(e)=>setIdade(e.target.value)}/>
      </div>
      <div>Nome{nome}</div>
      <div>Idade{idade}</div>
    </div>
  );
}

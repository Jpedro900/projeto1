import Topo from "@/components/Topo";
import { useState , useEffect } from "react";
import Globais from "@/components/Globais";

const linguagens = ["JS", "TS", "C", "PY", "CPP"];

export default function inputs() {
  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("");

  useEffect(() =>{
    Globais.idade='24'
  },[])

  function flinguagens() {
    return linguagens.map((c: any) => {
      return <option value={c}>{c}</option>;
    });
  }

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
          {flinguagens()}
        </select>
      </div>
      <div>Nome: {nome}</div>
      <div>Linguagem: {linguagem}</div>
      <div>
        <p>{Globais.linguagem}</p>
        <p>{Globais.nome}</p>
        <p>{Globais.idade}</p>
      </div>
    </div>
  );
}

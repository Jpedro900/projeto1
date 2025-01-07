import Topo from "@/components/Topo";
import { useEffect, useState } from "react";
import Globais from "@/components/Globais";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    
  }, []);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <Topo />
      <div>
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de aux: ${aux}`}</p>
        <button onClick={add}>Adicionar 1</button>
      </div>
      <div>
        <p>{Globais.linguagem}</p>
        <p>{Globais.nome}</p>
        <p>{Globais.idade}</p>
      </div>
    </div>
  );
}

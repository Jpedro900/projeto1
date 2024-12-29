//import Image from 'next/image';
import Topo from "../components/Topo";
import Card from "../components/Card";
import { CSSProperties } from "react";

const produtos = [
  { produto: "Mouse", valor: 49.9, desconto: 0, disponivel: true },
  { produto: "Teclado", valor: 69.9, desconto: 10, disponivel: true },
  { produto: "Monitor", valor: 459.9, desconto: 0, disponivel: false },
  { produto: "CPU", valor: 799.9, desconto: 100, disponivel: true },
  { produto: "Cx. som", valor: 39.9, desconto: 0, disponivel: false },
  { produto: "Microfone", valor: 65, desconto: 0, disponivel: true },
];

function calcDesc(valor: number, desconto: number) {
  return valor - desconto;
}

function calcDesc2(valor: number, desconto: number) {
  return valor - desconto / 2;
}

export default function Home() {
  return (
    <main style={teste}>
      <Topo />
      <div className=" flex justify-center gap-4">
        {produtos.map((e: any) => {
          if (e.disponivel) {
            return (
              <Card
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              />
            );
          }
        })}
      </div>
    </main>
  );
}

const teste: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  color: "white",
  width: "100%",
  height: "100vh",
};

import Card from "@/components/Card";
import Topo from "@/components/Topo";

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

function Produtos() {
  return (
    <div>
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
    </div>
  );
}

export default Produtos;

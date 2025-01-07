import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

const produtos = [
  { id: 1, produto: "Mouse", valor: 49.9, desconto: 0, disponivel: true },
  { id: 2, produto: "Teclado", valor: 69.9, desconto: 10, disponivel: true },
  { id: 3, produto: "Monitor", valor: 459.9, desconto: 0, disponivel: false },
  { id: 4, produto: "CPU", valor: 799.9, desconto: 100, disponivel: true },
  { id: 5, produto: "Cx. som", valor: 39.9, desconto: 0, disponivel: false },
  { id: 6, produto: "Microfone", valor: 65, desconto: 0, disponivel: true },
];

function calcDesc(valor: number, desconto: number) {
  return valor - desconto;
}

function calcDesc2(valor: number, desconto: number) {
  return valor - desconto / 2;
}

function Produtos() {
  const router = useRouter();
  const { nome, idade } = router.query;

  console.log(nome);
  console.log(idade);

  return (
    <div>
      <Topo />
      <div className=" flex justify-center gap-4">
        {produtos.map((e: any) => {
          if (e.disponivel) {
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              >
                Teste
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Produtos;

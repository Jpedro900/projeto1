import Link from "next/link";

function Topo(props: any) {
  return (
    <div className=" flex h-16 bg-gray-800 text-white font-bold">
      <nav className=" flex justify-around items-center h-full w-full">
        <Link
          href={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        <Link
          href={{
            pathname: "/produtos/Produtos",
            query:{
              nome: 'Joao',
              idade: '25',
            }
          }}
        >
          Produtos
        </Link>
        <Link
          href={{
            pathname: "/teste/Teste",
          }}
        >
          Teste
        </Link>
      </nav>
    </div>
  );
}

export default Topo;

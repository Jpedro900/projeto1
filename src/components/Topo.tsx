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
        <Link
          href={{
            pathname: "/useState/UseState",
          }}
        >
          State
        </Link>
        <Link
          href={{
            pathname: "/inputs/inputs",
          }}
        >
          inputs
        </Link>
        <Link
          href={{
            pathname: "/useEffect/useEffect"
          }}>
            UseEffect
        </Link>
      </nav>
    </div>
  );
}

export default Topo;

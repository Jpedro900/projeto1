import Link from "next/link";

function Topo(props: any) {
  return (
    <div className=" flex h-16 bg-gray-800 text-white font-bold">
      <nav className=" flex justify-around items-center h-full w-full">
        <Link href="/">Home</Link>
        <Link href="/produtos/Produtos">Produtos</Link>
        <Link href="/teste/Teste">Teste</Link>
      </nav>
    </div>
  );
}

export default Topo;

//import Image from 'next/image';

const nome:string = "Joao Pedro";
const sobrenome:string = "Souza";


function retNome(){
  return nome;
}

function Topo(){
  return (
    <div>
      <div>{retNome()}</div>
      <div>{sobrenome}</div>
      <div>logo</div>
    </div>
  ) 
}

export default function Home() {
  return (
    <main className=" w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <Topo />
    </main>
  );
}

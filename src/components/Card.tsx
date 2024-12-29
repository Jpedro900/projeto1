interface CardProps {
  produto: string;
  valor: number;
  desconto?: number;
  funcao?: any;
}

function Card({ produto, valor, desconto = 0, funcao }: CardProps) {
  return (
    <div className=" flex flex-col border border-red-700 rounded-sm p-4 justify-center">
      <div>{produto}</div>
      <div className={`${desconto && " line-through "}`}>
        Valor original: R${valor}
      </div>
      {desconto > 0 && (
        <div>
          <div>Desconto: R${desconto}</div>
          <div>Valor com desconto: R${funcao(valor, desconto)}</div>
        </div>
      )}
    </div>
  );
}

export default Card;

import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function UseState() {
  let [cont, setCont] = useState<number>(0);

  function add() {
    let c = cont;
    c++;
    setCont(c);
  }
  function sub(){
    let c = cont;
    c--;
    setCont(c);
  }

  return (
    <div>
      UseState
      <DisplayState valor={cont}></DisplayState>
      <div className=" flex gap-5">
          <button className=" btnPadrao" onClick={add}>somar</button>
          <button className=" btnPadrao" onClick={sub}>subtrair</button>
      </div>
    </div>
  );
}

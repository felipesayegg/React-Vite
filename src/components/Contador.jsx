import { useState } from "react";
export default function Contador() {
  const [valor, setValor] = useState(0);
  function incrementar() {
    setValor(valor + 1);
  }
  function zerar() {
    setValor(0);
  }
  return (
    <section>
      <h2>Contador: {valor}</h2>
      <button onClick={incrementar}>+1</button>
      <button onClick={zerar} style={{ marginLeft: 8 }}>Zerar</button>
    </section>
  );
}
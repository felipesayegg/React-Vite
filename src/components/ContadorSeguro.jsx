import { useState } from "react";
export default function ContadorSeguro() {
  const [valor, setValor] = useState(0);
  function addTresVezesInseguro() {
    // Pode falhar em cenários com batching, pois lê 'valor' desatualizado
    setValor(valor + 1);
    setValor(valor + 1);
    setValor(valor + 1);
  }
  function addTresVezesSeguro() {
    // Forma correta quando depende do estado anterior
    setValor((v) => v + 1);
    setValor((v) => v + 1);
    setValor((v) => v + 1);
  }
  return (
    <section>
      <h2>Contador Seguro: {valor}</h2>
      <button onClick={addTresVezesInseguro}>+3 (potencialmente inseguro)</button>
      <button onClick={addTresVezesSeguro} style={{ marginLeft: 8 }}>
        +3 (seguro)
      </button>
    </section>
  );
}
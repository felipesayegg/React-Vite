import { useState } from "react";
export default function TextoDinamico() {
  const [texto, setTexto] = useState("Texto inicial");
  const [contador, setContador] = useState(0);
  function alterarTexto() {
    setTexto((t) => t + " •");
  }
  return (
    <section>
      <h2>Virtual DOM em ação</h2>
      <p>{texto}</p>
      <button onClick={alterarTexto}>Alterar Texto</button>
      <button onClick={() => setContador((c) => c + 1)} style={{ marginLeft: 8 }}>
        Incrementar ({contador})
      </button>
    </section>
  );
}
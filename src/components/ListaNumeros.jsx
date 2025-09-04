// Arquivo: src/components/ListaNumeros.jsx
import { useState } from "react";
export default function ListaNumeros() {
  const [numeros, setNumeros] = useState([1, 2, 3]);
  function adicionar() {
    setNumeros(prev => [...prev, prev.length + 1]);
  }
  function removerUltimo() {
    setNumeros(prev => prev.slice(0, -1));
  }
  return (
    <section>
      <h2>Lista</h2>
      <ul>
        {numeros.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={removerUltimo} style={{ marginLeft: 8 }}>
        Remover último
      </button>
    </section>
  );
}
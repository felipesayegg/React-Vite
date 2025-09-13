import { useState } from "react";
export default function ListaComIds() {
  const [pessoas, setPessoas] = useState([
    { id: 101, nome: "Ana" },
    { id: 102, nome: "Bruno" },
    { id: 103, nome: "Carla" },
  ]);
  function embaralhar() {
    setPessoas((prev) => {
      const copia = [...prev];
      for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
      }
      return copia;
    });
  }
  return (
    <section>
      <h2>Keys com IDs únicos</h2>
      <button onClick={embaralhar}>Embaralhar Ordem</button>
      <ul>
        {pessoas.map((p) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </ul>
    </section>
  );
}
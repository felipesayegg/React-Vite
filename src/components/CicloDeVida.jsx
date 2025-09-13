import { useEffect, useState } from "react";
export default function CicloDeVida() {
  const [contador, setContador] = useState(0);
  // Montagem: executa uma vez
  useEffect(() => {
    console.log("Montou: configurar listeners, buscar dados, etc.");
    return () => {
      console.log("Desmontou: limpar timers/listeners, abortar fetch, etc.");
    };
  }, []);
  // Atualização: executa quando 'contador' muda
  useEffect(() => {
    if (contador > 0) {
      console.log("Atualizou contador para:", contador);
    }
  }, [contador]);
  return (
    <section>
      <h2>useEffect: Montagem / Atualização / Desmontagem</h2>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
    </section>
  );
}
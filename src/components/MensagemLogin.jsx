import { useState } from "react";
export default function MensagemLogin() {
  const [autenticado, setAutenticado] = useState(false);
  const [nome, setNome] = useState("Patrícia");
  return (
    <section>
      <h2>Renderização Condicional</h2>
      {/* Ternário */}
      <p>{autenticado ? `Bem-vinda, ${nome}!` : "Faça login para continuar."}</p>
      {/* Curto-circuito */}
      {autenticado && <small>Você tem 3 notificações não lidas.</small>}
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setAutenticado((a) => !a)}>
          {autenticado ? "Sair" : "Entrar"}
        </button>
      </div>
    </section>
  );
}
import { useState } from "react";
export default function BotaoEvento() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  function handleClick() {
    setMensagem(`Olá, ${nome || "visitante"}!`);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setMensagem(`Form enviado por: ${nome || "sem nome"}`);
  }
  return (
    <section>
      <h2>Eventos: onClick, onChange, onSubmit</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="button" onClick={handleClick} style={{ marginLeft: 8 }}>
          Dizer Olá
        </button>
        <button type="submit" style={{ marginLeft: 8 }}>
          Enviar Form
        </button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </section>
  );
}
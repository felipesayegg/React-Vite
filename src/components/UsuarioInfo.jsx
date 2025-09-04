// Arquivo: src/components/UsuarioInfo.jsx
import { useState } from "react";
export default function UsuarioInfo() {
  const [usuario, setUsuario] = useState({
    nome: "Ana",
    idade: 22,
    ativo: true,
  });
  function ativarDesativar() {
    setUsuario(prev => ({ ...prev, ativo: !prev.ativo }));
  }
  function envelhecer() {
    setUsuario(prev => ({ ...prev, idade: prev.idade + 1 }));
  }
  return (
    <section>
      <h2>Usuário</h2>
      <p>Nome: {usuario.nome}</p>
      <p>Idade: {usuario.idade}</p>
      <p>Status: {usuario.ativo ? "Ativo" : "Inativo"}</p>
      <button onClick={ativarDesativar}>Alternar Status</button>
      <button onClick={envelhecer} style={{ marginLeft: 8 }}>+1 ano</button>
    </section>
  );
}
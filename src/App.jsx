import BoasVindas from "./components/BoasVindas.jsx";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>Aula 02 — Palco do componente</h1>

      {/* aqui testamos APENAS um componente por vez */}
      <BoasVindas nome="Felipe" />
      {/* teste: troque o nome, remova a prop para ver o valor padrão */}
    </div>
  );
}

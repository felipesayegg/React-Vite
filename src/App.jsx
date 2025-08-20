import { SaudacaoClasse } from "./components/SaudacaoClasse";
import SaudacaoFuncional from "./components/SaudacaoFuncional";

export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Comparativo de Componentes</h1>
      <SaudacaoClasse />
      <SaudacaoFuncional />
    </main>
  );
}

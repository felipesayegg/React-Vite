import BoasVindas from "./components/BoasVindas.jsx"; // se sem extensão der erro, use .jsx

export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Props em Ação</h1>
      <BoasVindas nome="Marina" curso="Frontend com React" />
      <BoasVindas nome="João" curso="Mobile com React Native" />
    </main>
  );
}

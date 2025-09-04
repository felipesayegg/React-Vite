import ContadorSeguro from "./components/ContadorSeguro";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>Atualizações Seguras de Estado</h1>
      <ContadorSeguro />
    </main>
  );
}
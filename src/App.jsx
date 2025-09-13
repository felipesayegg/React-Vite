import MensagemUsuario from "./components/MensagemUsuario";
export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 16 }}>
      <MensagemUsuario ok={false} nome="Carlos" />
    </main>
  );
}
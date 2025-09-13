function BemVindo({ nome }) {
  return <p>Bem-vindo(a), {nome}!</p>;
}
function AcessoNegado() {
  return <p>Acesso negado.</p>;
}
export default function MensagemUsuario({ ok = true, nome = "Convidado" }) {
  const componente = ok ? <BemVindo nome={nome} /> : <AcessoNegado />;
  return (
    <section>
      <h2>Variáveis e Componentes</h2>
      {componente}
    </section>
  );
}